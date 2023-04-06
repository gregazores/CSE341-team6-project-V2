//const dotenv = require('dotenv').config();
const express = require('express');
const router = express.Router();
const swaggerRouter = require('./swagger');
const cors = require('cors')
const session = require('express-session');
const passport = require("passport");

require("../config/passport")

router.use(cors())

router.use('/', swaggerRouter);

router.use(session({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false
    } //so it will work with http and https
}));

router.use(passport.initialize());
router.use(passport.session());
router.use('/users', require('./users'))


router.use('/movies', require('./movies'))
router.use('/shows', require('./tv_shows'))
router.use('/games', require('./games'))


router.get('/', (req, res, next) => {
    res.send('CSE 341 FINAL PROJECT API')
});

router.get("/root-protected", function(req, res){
    if (req.isAuthenticated()){
        res.send("This request is authenticated");
    } else {
        res.status(400).json("Sorry you must be logged in! No authorization");
    }
});


module.exports = router;