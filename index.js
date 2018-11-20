var express = require('express');
var logger = require('morgan');
var http = require('http');
//var config= require ('./config/main');
var router = express.Router();
var path = require('path');

//var users = require('./routes/users');
var port = process.env.PORT || '5000';

var app = express();
app.set('port', port);
app.use (logger('dev'));

app.use(express.static('public'));
app.get('/api', (req, res) => res.json({message:'hello world'}));

var server = http.createServer(app);
server.listen(port);


