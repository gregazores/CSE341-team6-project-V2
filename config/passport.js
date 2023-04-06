const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User')

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function(id, done) {
    let user = await User.findById(id)
    done(null, user); 
});

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    // callbackURL: "http://localhost:3000/auth/google/secrets",
    callbackURL: "https://cse341-team6-project-v2.onrender.com/users/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },

    async function (accessToken, refreshToken, profile, done) {
        

        try {

            let user = await User.findOne({ googleId: profile.id });
            if (!user) {

                const newUser = new User({
                    username: profile.displayName,
                    googleId: profile.id
                });
                user = await newUser.save();
            }
            return done(null, user);
            } catch (err) {
                return done(err);
            }
    }


));