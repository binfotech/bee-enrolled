const router = require('express').Router();
const db = require('../database/db');
const helpers = require('./../helpers');
const t = require('./../TABLES');

router.get('/profile',async(req,res) => {
    let connection;
    try{
        connection = await db.getConnectionAsync();
        const userId = req.user.id;
        const users = await connection.queryAsync(`SELECT * FROM ${t.USERS} WHERE id=?;`,[userId]);
        if(!users.length){
            return res.status(400).json({message:'User not found.'});
        }
        res.status(200).send({user: users[0]});
    }catch(e){
        helpers.handleException(e.code,res);
    }finally{
        connection.release();
    }
});
router.get('/logout',async(req,res) => {
    res.send({});
});
module.exports = router;
