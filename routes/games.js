const express = require('express');
const router = express.Router();
const { GamesController } = require('../controllers/games');

const gameController = require('../controllers/games');

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
    console.log("you called me put")
    let controller = new GamesController('games')
    controller.updateSingleGame(req, res, next)
});

router.delete('/:id', (req, res, next) => {
    let controller = new GamesController('games')
    controller.deleteSingleGame(req, res, next)
});

module.exports = router;