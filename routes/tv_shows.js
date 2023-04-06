const express = require('express');
const router = express.Router();
const { TvShowController } = require('../controllers/tv_shows');

router.get('/', (req, res, next) => {
    let controller = new TvShowController('shows')
    controller.getAllShows(req, res, next)
});

router.get('/:id', (req, res, next) => {
    let controller = new TvShowController('shows')
    controller.getSingleShow(req, res, next)
});

router.post('/', (req, res, next) => {
    let controller = new TvShowController('shows')
    controller.createSingleShow(req, res, next)
});

router.put('/:id', (req, res, next) => {
    let controller = new TvShowController('shows')
    controller.updateSingleShow(req, res, next)
});

router.delete('/:id', (req, res, next) => {
    let controller = new TvShowController('shows')
    controller.deleteSingleShow(req, res, next)
});

module.exports = router;