const express = require('express');
const config = require('./app/config.js');
const Botkit = require('botkit');
const wit = require('botkit-middleware-witai');

const WIT_TOKEN = config.wit.serverAccessToken;
const SLACK_TOKEN = config.slack.token;

var router = express.Router();

// endpoint for webhook get request
router.get('/webhook', function(req, res){

});

router.post('/webhook', function(req, res){

});


module.exports = router;
