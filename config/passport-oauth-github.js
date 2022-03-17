const passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
const crypto = require('crypto');
const User = require('../models/user');
const env = require('./environment');

//creating passport strategy
passport.use(new GitHubStrategy({
    clientID : "cea0aa96d54f1736fa40",
    clientSecret : "635dcd0f66624f29bb75c54371852b59ebaeff83",
    callbackURL :  env.github_call_back_url
},
    function(accessToken, refreshToken, profile, done){
        console.log("profile-github",profile);
        User.findOne({email : profile.username}).exec(function(err,user){
            if(err){
                console.log('error in passport-github-oauth',err);
                return;
            }
            console.log(profile);

            //if user exist
            if(user){
                return done(null,user);
            }else{    //if not then create one
                User.create({
                    name : profile.displayName,
                    email : profile.username,
                    password : crypto.randomBytes(20).toString('hex')
                }, function(err,user){
                    if(err){
                        console.log('error in passport-github-oauth',err);
                        return;
                    }
                    return done(null,user);
                });
            }
        });
    }
   
))

module.exports = passport;