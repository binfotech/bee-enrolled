const dev = process.env.NODE_ENV !== 'production';
const app = require('next')({dev});
const handle = app.getRequestHandler();
const express = require('express');
const jwt = require("jsonwebtoken");
const Promise = require('bluebird');
Promise.promisifyAll(jwt);

app.prepare().then( () => {
    //dependencies
    const bodyParser = require('body-parser');
    const session = require('express-session');
    const cookieParser = require('cookie-parser');
    const MobileDetect = require('mobile-detect');
    const cors = require('cors');

    //const & config
    const config = require('./config');
    const c = require('./Constants');
    const secret = require('./Secrets');
    const morgan = require("morgan");

    //checking config file
    if(!config.PORT) throw new Error("PORT is required in config File");
    if(!config.BASE) throw new Error("BASE url is required in config File");
    if(!config.DB) throw new Error("DB credentials are required in config File");
    if(!config.DB.connectionLimit) throw new Error("DB.connectionLimit is required in config File");
    if(!config.DB.host) throw new Error("DB.host is required in config File");
    if(!config.DB.user) throw new Error("DB.user is required in config File");
    // if(!config.DB.password) throw new Error("DB.password is required in config File");
    if(!config.DB.database) throw new Error("DB.database is required in config File");

    let http, io;

    //create server
    const server = new express();
    server.use(morgan("dev"))

    //set middlewares and routes
    server.use(cookieParser(secret.SESSION_KEY));
    server.use(bodyParser.json());
    server.use(session({
        secret:secret.SESSION_KEY,
        saveUninitialized:true,
        resave:false
    }));

    //middleware to remove trailing slashes
    server.use((req,res,next) => {
        if(req.path.substr(-1) == '/' && req.path.length > 1){
            let query = req.url.slice(req.path.length);
            res.redirect(301,req.path.slice(0,-1) + query);
        }else{
            next();
        }
    });

    //middleware to remove more than 1 slash
    server.use((req,res,next) => {
        if(/\/{2,}/g.test(req.path)){
            let query = req.url.slice(req.path.length);
            let path = req.path.replace(/\/{2,}/g, '/');
            res.redirect(301,path + query);
        }else{
            next();
        }
    });

    //middleware to detect mobile
    server.use((req,res,next) => {
        md = new MobileDetect(req.headers['user-agent']);
        req.mobile = md.mobile();
        next();
    });

    server.use('/api',async(req,res,next) => {
        const accessToken = req.headers["authorization"];
        if(!accessToken){
            return res.status(401).json({status: 401,message: 'You need to login before accessing the resource.'});
        }
        try{
            const user = await jwt.verifyAsync(accessToken,c.ACCESS_TOKEN_SECRET);
            req.user = user;
        }catch(e){
            return res.status(401).json({status: 401,message:'Access Token invalid.'});
        }
        next();
    });
    
    server.use(express.static('express-static'));
    server.use('/api/',require('./routes/api'));
    server.use('/web/',require('./routes/web'));

    server.get('/login',(req,res) => app.render(req,res,'/login'));
    server.get('/forgot',(req,res) => app.render(req,res,'/forgot'));
    server.get('/signup',(req,res) => app.render(req,res,'/signup'));
    server.get('/reset/:token',(req,res) => {
        app.render(req,res,'/reset-password',{token:req.params.token});
    });
    server.get('/about-us',(req,res) => app.render(req,res,'/about-us'));
    server.get('/contact-us',(req,res) => app.render(req,res,'/contact-us'));
    server.get('/faq',(req,res) => app.render(req,res,'/faq'));
    server.get('/why-choose-us',(req,res) => app.render(req,res,'/why-choose-us'));
    server.get('/work-with-us',(req,res) => app.render(req,res,'/work-with-us'));
    server.get('/disclaimer',(req,res) => app.render(req,res,'/disclaimer'));
    server.get('/privacy-policy',(req,res) => app.render(req,res,'/privacy-policy'));
    server.get('/help',(req,res) => app.render(req,res,'/help'));
    server.get('/safety',(req,res) => app.render(req,res,'/safety'));
    server.get('/terms-conditions',(req,res) => app.render(req,res,'/terms-conditions'));
    server.get('/not-found',(req,res) => app.render(req,res,'/not-found'));
    server.get('/',(req,res) => app.render(req,res,'/index'));
    server.all('*',(req,res) => app.render(req,res,'/not-found'));

    const PORT = config.PORT;
    if(!dev){
        const fs = require('fs');
        const path = require('path');
        const {CERT} = c;
        const options = {
            cert: fs.readFileSync(path.join(__dirname,CERT.path,CERT.cert)),
            key: fs.readFileSync(path.join(__dirname,CERT.path,CERT.key)),
            ca: fs.readFileSync(path.join(__dirname,CERT.path,CERT.ca)), 
        }
        http = require('https');
        http = http.createServer(options,server);
        io = require('socket.io')(http);
    }else{
        http = require('http').Server(server);
        io = require('socket.io')(http);
    }
    http.listen(PORT);
    const ENV = process.env.NODE_ENV || 'dev';
    console.log("* * * * * * * * * * * * * * *");
    console.log("* Bee Enrolled SSR Started  *");
    console.log(`* PORT: ${PORT} ${" ".repeat(19-(PORT.toString()).length)}*`);
    console.log(`* ENV : ${ENV} ${" ".repeat(19-ENV.length)}*`);
    console.log("* * * * * * * * * * * * * * *");
}).catch(e => {
    console.log("* * * * * * * * * * * * * ERROR * * * * * * * * * * * * *")
    console.log(e.message);
    console.log("* * * * * * * * * * * * * ERROR * * * * * * * * * * * * *")
    process.exit(1);
});
