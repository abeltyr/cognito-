const express = require("express");
const bodyParser = require("body-parser");
const User = require('./routes/User')

//initialize the express app
const app = express();

//  don't console.log, instead use the debug module
const debug = require("debug")("app");
debug("starting server ...");

// parse the body of the incoming body req
app.use(bodyParser.json());

app.use('/User', User)

// Start listening for connections
app.listen(process.env.APP_PORT ? process.env.APP_PORT : 3000, err => {
    if (err) debug("can't start the app");
    debug(`starting ${process.env.APP_NAME} on port ${process.env.APP_PORT}`);
});