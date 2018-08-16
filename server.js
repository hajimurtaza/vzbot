'use strict';
var express  = require('express'),
bodyParser   = require('body-parser'),
http         = require('http'),
config       = require('./config'),
server       = express(),
mongoose     = require('mongoose'),
JobInfo     = require('./API/Models/JobInfo') //created model loading here
// mongoose instance connection url connection
mongoose.Promise = Promise; 
mongoose.connect(config.dbUrl);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
var routes = require('./API/Routes/Router'); //importing route
routes(server); //register the route
server.listen((80), function () {
    console.log("Server is up and listening on port" + 8000);
});