const express = require('express');
const fbRouter = require('./fb.js');
const slackRouter = require('./slack.js');
const config = require('./app/config.js');

var app = express();

const PORT = config.bot.port;

// route all facebook requests
app.use('/fb', fbRouter);

// route all slack requests
app.use('/slack', slackRouter);

app.listen(PORT);
// start server
console.log('Listening on :' + PORT + '...');
