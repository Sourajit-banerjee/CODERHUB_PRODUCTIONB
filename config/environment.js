
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');

const logDirectory = path.join(__dirname,'../production_logs'); //location where logs will be stored
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory); //checking if log directory exists ,if not then creating one 


const accessLogstream = rfs.createStream('access.log',{
    interval : '1d', //interval after which logs of prev are deleted
    path : logDirectory
});


const development = {
    name : 'development',
    asset_path : './assets',
    session_cookie_key : 'blahsomething',
    db: 'MyCodeial',
    smtp : {
        service : 'gmail',
        host : 'smpt.gmail.com',
        port: 587,
        secure: false,
        auth : {
            user: '***',
            pass: '***'
        }
    },
    google_client_id : "724827921654-0q2jpl7cs1sqv9rsos52j0g2h47ldarf.apps.googleusercontent.com",
    google_client_secret : "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",
    google_call_back_url : "http://localhost:4000/users/auth/google/callback",
    github_cal_back_url : "http://localhost:4000/auth/github/callback",
    jwt_secret : 'codehub',
    morgan : {
        mode : 'dev',
        options : {stream : accessLogstream}
    }
}

const production = {
    name : 'production',
    asset_path : process.env.CODEHUB_ASSETS_PATH,
    session_cookie_key : process.env.CODEHUB_SESSION_COOKIE_KEY,
    db: process.env.CODEHUB_DB,
    smtp : {
        service : 'gmail',
        host : 'smpt.gmail.com',
        port: 587,
        secure: false,
        auth : {
             user :process.env.CodeHub_GMAIL_USERNAME,   
            pass :process.env.CodeHub_GMAIL_PASSWORD   
        }
    },
    google_client_id : "724827921654-0q2jpl7cs1sqv9rsos52j0g2h47ldarf.apps.googleusercontent.com",
    google_client_secret : "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",
    google_call_back_url :  "http://localhost:4000/users/auth/google/callback",
    github_cal_back_url : "http://localhost:4000/users/auth/github/callback",
    jwt_secret : process.env.CODEHUB_JWT_SECRET,
    morgan : {
        mode : 'combined',
        options : {stream : accessLogstream}
    }
}

module.exports =production;
// eval(process.env.CODEHUB_ENVIRONMENT) == undefined ? development : eval(process.env.CODEHUB_ENVIRONMENT)