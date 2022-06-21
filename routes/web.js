const router = require('express').Router();
const bcrypt = require('bcryptjs');
const axios = require('axios');
const uniqid = require('uniqid');
const db = require('../database/db');
const helpers = require('./../helpers');
const t = require('./../TABLES');
const c = require('./../Constants');
const secret = require('./../Secrets');
const mailer = require('./../lib/mailer');
const jwt = require("jsonwebtoken");
const Promise = require('bluebird');
Promise.promisifyAll(jwt);

router.post('/sociallogin',async(req,res) => {
    let userID = req.body.user_id;
    let name = req.body.name;
    let email = req.body.email;
    let type = req.body.type;
    let picture = req.body.profile_picture;
    let accessToken = req.body.access_token;

    if(!email || !email.trim()){
        return res.status(400).send({message:'Empty Email Address.'});
    }
    email = email.trim();
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRE.test(email)){
        return res.status(400).send({message:'Invalid Email Address.'});
    }
    let connection;
    let user;
    try{
        connection = await db.getConnectionAsync();
        const users = await connection.queryAsync(`SELECT * FROM ${t.USERS} WHERE email=?;`,[email]);
        if(!users.length){
            const hash = bcrypt.hashSync("12345678",8);
            const newUser = connection.queryAsync(`INSERT INTO ${t.USERS} (name,email,password,role,type,user_id,status,created_at) VALUES (?,?,?,?,?,?,?,?);`,[name,email,hash,'parents',type,userID,1,NOW()]);
            const userId = (await newUser).insertId;
            const newusers = await connection.queryAsync(`SELECT * FROM ${t.USERS} WHERE id=?;`,[userId]);
            const settings = await connection.queryAsync(`SELECT * FROM ${t.SETTINGS} WHERE id=1;`);
            user = newusers[0];
            const setting = settings[0];
            if(user.email && setting.sendgrid_api_key && setting.mail_from){
                let html = `Hi ${user.name}!<br/><br/>`;
                    html += `<b>Thank you for setting up an account with Bee Enrolled.</b><br/><br/>If you have any questions regarding your account, please contact us at <a href="mailto:info@beeenrolled.com">info@beeenrolled.com</a>. Our technical support team will assist you with anything you need.<br/><br/>`;
                    html += `We look forward to helping you!<br/>`;
                    html += `The Team at Bee Enrolled<br/>`;
                    html += `<a href="https://www.beeenrolled.com">www.beeenrolled.com</a>`;
                let subject = `Welcome to Bee Enrolled`;
                mailer.sendMail(setting.sendgrid_api_key,user.email,setting.mail_from,subject,html,'html');
            }
        }else{
            user = users[0];
        }
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            picture: user.picture
        };
        let token = await jwt.signAsync(payload,c.ACCESS_TOKEN_SECRET,{expiresIn: "12h"});
        res.status(200).send({token: token,user: user});
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
router.post('/login',async(req,res) => {
    let {email,password,remember_me} = req.body;
    if(!email || !email.trim()){
        return res.status(400).send({message:'Empty Email Address.'});
    }
    email = email.trim();
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRE.test(email)){
        return res.status(400).send({message:'Invalid Email Address.'});
    }
    if(!password || !password.trim()){
        return res.status(400).send({message:'Empty password.'});
    }    
    password = password.trim();
    let connection;
    try{
        connection = await db.getConnectionAsync();
        const users = await connection.queryAsync(`SELECT * FROM ${t.USERS} WHERE email=?;`,[email]);
        if(!users.length){
            return res.status(400).send({message:'Email address is not registered.'});
        }
        const user = users[0];
        const hash = user.password
        const match = await bcrypt.compare(password,hash);
        if(!match){
            return res.status(400).send({message:'Password does not match.'});
        }
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            picture: user.picture
        };
        let token = "";
        if(remember_me){
            token = await jwt.signAsync(payload,c.ACCESS_TOKEN_SECRET,{expiresIn: "48h"});
        }else{
            token = await jwt.signAsync(payload,c.ACCESS_TOKEN_SECRET,{expiresIn: "12h"});
        }
        res.status(200).send({token: token,user: user});
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
router.post('/forgot-password',async(req,res) => {
    let {email} = req.body;
    if(!email || !email.trim()){
        return res.status(400).send({message:'Empty Email Address.'});
    }
    email = email.trim();
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRE.test(email)){
        return res.status(400).send({message:'Invalid Email Address.'});
    }
    let connection;
    try{
        connection = await db.getConnectionAsync();
        const users = await connection.queryAsync(`SELECT * FROM ${t.USERS} WHERE email=?;`,[email]);
        if(!users.length){
            return res.status(400).send({message:'Email address is not registered.'});
        }
        const user = users[0];
        const reset = uniqid();
        await connection.queryAsync(`INSERT INTO ${t.PASSWORD_RESET} (email,token) VALUES (?,?);`,[email,token]);
        const settings = await connection.queryAsync(`SELECT * FROM ${t.SETTINGS} WHERE id=1;`);
        const setting = settings[0];
        if(setting.sendgrid_api_key && setting.mail_from && setting.site_email){
            let subject = `Bee Enrolled - Password Reset Confirmation for ${user.name}`;
            let html = `<h1>Hi ${user.name},</h1>`;
            html += '<p>There was recently a request to change the password for your account.</p>';
            html += '<p>If you requested this password change, please reset your password here:</p>';
            html += '<p><a style="cursor:pointer;padding:0 20px;background-color:#3696c2;color:#fff;line-height:40px;font-size:15px;display:inline-block;text-decoration:none;" target="_blank;" href="'+c.BASE_URL+'/reset/'+reset+'">RESET PASSWORD</a></p>';
            html += '<p>If you did not make this request, you can ignore this message and your password will remain the same.</p><br/>';
            html += `Thank you<br/>`;
            html += `Bee Enrolled Team<br/>`;
            html += `<a href="https://www.beeenrolled.com">www.beeenrolled.com</a>`;
            mailer.sendMail(setting.sendgrid_api_key,email,setting.mail_from,subject,html,'html');
        }
        return res.send({message:`If there is an account associated with ${email} you will receive an email with a link to reset your password.`});
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
router.get('/reset-password-token',async(req,res) => {
    let token = req.query.token;
    let connection;
    try{
        connection = await db.getConnectionAsync();
        const resetUsers = await connection.queryAsync(`SELECT * FROM ${t.PASSWORD_RESET} WHERE token=?;`,[token]);
        if(!resetUsers.length){
            return res.status(401).send({message:'Token is Expired.'});
        }
        const resetUser = resetUsers[0];
        res.send({message:"Token Found."});
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
router.post('/reset-password',async(req,res) => {
    let {token,password} = req.body;
    if(!password || !password.trim()){
        return res.status(400).send({message:'Empty Password.'});
    }
    const passRegix = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!passRegix.test(password.trim())){
        return res.status(400).send({message:'Password must be a minimum of 8 characters including Number, Uppercase, Lowercase and One Special Character.'});
    }
    password = password.trim();
    let connection;
    try{
        connection = await db.getConnectionAsync();
        const resetUsers = await connection.queryAsync(`SELECT * FROM ${t.PASSWORD_RESET} WHERE token=?;`,[token]);
        if(!resetUsers.length){
            return res.status(400).send({message:'Token is Expired.'});
        }
        const resetUser = resetUsers[0];
        const hash = bcrypt.hashSync(password,8);
        await connection.queryAsync(`UPDATE ${t.USERS} SET password=? WHERE email=?;`,[hash,resetUser.email]);
        await connection.queryAsync(`DELETE FROM ${t.PASSWORD_RESET} WHERE token=?;`,[token]);
        res.send({message:"Your password is reset successfully."});
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
router.post('/register',async(req,res) => {
    let {name,email,password} = req.body;    
    if(!name || !name.trim()){
        return res.status(400).send({message:'Empty Name.'});
    }
    if(!email || !email.trim()){
        return res.status(400).send({message:'Empty Email Address.'});
    }
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRE.test(email)){
        return res.status(400).send({message:'Invalid Email Address.'});
    }
    if(!password || !password.trim()){
        return res.status(400).send({message:'Empty password.'});
    }
    const passRegix = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if(!passRegix.test(password.trim())){
        return res.status(400).send({message:'Password must be a minimum of 8 characters including Number, Uppercase, Lowercase and One Special Character.'});
    }
    name = name.trim();
    email = email.trim();
    password = password.trim();
    let connection;
    try{
        connection = await db.getConnectionAsync();
        const checkUserEmail = await connection.queryAsync(`SELECT id FROM ${t.USERS} WHERE email=?;`,[email]);
        if(checkUserEmail.length > 0){
            return res.status(400).send({message:'Email Address already exists'});
        }
        const hash = bcrypt.hashSync(password,8);
        const newUser = connection.queryAsync(`INSERT INTO ${t.USERS} (name,email,password,role,status,created_at) VALUES (?,?,?,?,?,?);`,[name,email,hash,'parents',1,NOW()]);
        const userId = (await newUser).insertId;
        const users = await connection.queryAsync(`SELECT * FROM ${t.USERS} WHERE id=?;`,[userId]);
        const settings = await connection.queryAsync(`SELECT * FROM ${t.SETTINGS} WHERE id=1;`);
        const user = users[0];
        const setting = settings[0];
        if(user.email && setting.sendgrid_api_key && setting.mail_from){
            let html = `Hi ${user.name}!<br/><br/>`;
                html += `<b>Thank you for setting up an account with Bee Enrolled.</b><br/><br/>If you have any questions regarding your account, please contact us at <a href="mailto:info@beeenrolled.com">info@beeenrolled.com</a>. Our technical support team will assist you with anything you need.<br/><br/>`;
                html += `We look forward to helping you!<br/>`;
                html += `The Team at Bee Enrolled<br/>`;
                html += `<a href="https://www.beeenrolled.com">www.beeenrolled.com</a>`;
            let subject = `Welcome to Bee Enrolled`;
            mailer.sendMail(setting.sendgrid_api_key,user.email,setting.mail_from,subject,html,'html');
        }
        const payload = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            picture: user.picture
        };
        let token = await jwt.signAsync(payload,c.ACCESS_TOKEN_SECRET,{expiresIn: "12h"});
        res.status(200).send({token: token,user: user});
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
router.post('/contact',async(req,res) => {
    let {fname,lname,mobile,email,message} = req.body;
    if(!fname || !fname.trim()){
       return res.status(400).send({message: 'Please enter your first name'});
    }
    if(!lname || !lname.trim()){
       return res.status(400).send({message: 'Please enter your surname'});
    }
    if(!email || !email.trim()){
        return res.status(400).send({message: 'Please enter your email'});
    }
    const emailRE = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailRE.test(email)){
        return res.status(400).send({message: 'Please enter a valid email'});
    }
    if(!message || !message.trim()){
        return res.status(400).send({message: 'Please enter your message'});
    }
    let connection;
    try{
        connection = await db.getConnectionAsync();
        const settings = await connection.queryAsync(`SELECT * FROM ${t.SETTINGS} WHERE id=1;`);
        const setting = settings[0];
        if(setting.sendgrid_api_key && setting.mail_from && setting.site_email){
            fname = fname.trim();
            lname = lname.trim();
            mobile = mobile.trim();
            email = email.trim();
            message = message.trim();
            let subject = `Bee Enrolled enquiry from ${fname}`;
            let html = `First Name: ${fname} <br/>Surname: ${lname} <br/>Mobile: ${mobile} <br/>Email: ${email} <br/>Message: ${message}`;
            mailer.sendMail(setting.sendgrid_api_key,setting.site_email,setting.mail_from,subject,html,'html');
        }
        res.end();
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
module.exports = router;