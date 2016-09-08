const config = require('./app/config.js');
var api = config.api;
var bot = config.bot;
var express = require('express');


console.log("Api keys are " + api.appId + api.appKey);
