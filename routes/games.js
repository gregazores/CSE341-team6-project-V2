const express = require('express');
const router = express.Router();
const { GamesController } = require('../controllers/games');

router.get("/games-protected", (req, res, next) => {
    if (req.isAuthenticated()){
      res.send("This request is authenticated");
    } else {
      res.status(400).json("Sorry you must be logged in! No authorization");
    }
});

router.get('/', (req, res, next) => {
    let controller = new GamesController('games')
    controller.getAllGames(req, res, next)
});

router.get('/:id', (req, res, next) => {
    let controller = new GamesController('games')
    controller.getSingleGame(req, res, next)
});

router.post('/', (req, res, next) => {
    let controller = new GamesController('games')
    controller.createSingleGame(req, res, next)
});

router.put('/:id', (req, res, next) => {
    let controller = new GamesController('games')
    controller.updateSingleGame(req, res, next)
});

router.delete('/:id', (req, res, next) => {
    let controller = new GamesController('games')
    controller.deleteSingleGame(req, res, next)
});

module.exports = router;