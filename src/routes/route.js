const express = require('express');

const loggs=require("../logger/logger")

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log(loggs.logs)
    res.send('My first ever api! bro')
});
router.get('/test-me2', function (req, res) {
    res.send('My first ever api! second one  bro')
});
router.get('/chandu', function (req, res) {
    res.send('HI chandu i add your name to the url don cool')
});

module.exports = router;
// adding this comment for no reason