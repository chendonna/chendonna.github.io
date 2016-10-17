var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//var validator = require('validator');

mongoose.connect('mongodb://localhost/cyoa');
//express
var app = express();

//var path = __dirname + "/public/"

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

//server
app.listen(3000);