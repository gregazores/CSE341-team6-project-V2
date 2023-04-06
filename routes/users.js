const express = require('express');
const router = express.Router();
const User = require('../models/User')
const passport = require("passport");

router.get("/auth/google",
  passport.authenticate('google', { scope: ["profile"], prompt: 'select_account' })
);

router.get("/auth/google/callback",
    passport.authenticate('google', { 
            successRedirect: "/users/success" ,
            failureRedirect: "/users/login-failed" 
    })
);

router.get('/success', (req, res, next) => {
    res.status(200).json("Successfully logged in");
});

router.get('/login-failed', (req, res, next) => {
    res.status(500).json('Sorry failed to log in logged in');
});

router.get("/logout", function(req, res, next) {
    if (req.user) {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.status(200).json("Successfully logged out!");
          });
    }
});

router.get("/protected", function(req, res){
    if (req.isAuthenticated()){
      res.send("This request is authenticated");
    } else {
      res.status(400).json("Sorry you must be logged in! No authorization");
    }
});

router.post("/register", function(req, res){

    User.register({username: req.body.username}, req.body.password, function(err, user){
      if (err) {
        res.status(400).json({message: err.message})
      } else {
        passport.authenticate("local")(req, res, function(){
          res.status(200).json("Successfully Registered!");
        });
      }
    });
  
});

router.post("/login", function(req, res){

    const user = new User({
      username: req.body.username,
      password: req.body.password
    });
  
    req.login(user, function(err){
        if (err) {
        res.status(400).json({message: err.message})
        } else {
        passport.authenticate("local")(req, res, function(){
            res.status(200).json("Successfully Logged In!");
        });
        }
    });

});

module.exports = router;
