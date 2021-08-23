const { Router}  = require('express');

const router = Router();

const  weather = require('../weather.json');

router.get('/',(req, res) => {
    res.json(weather);
});

module.exports =  router;