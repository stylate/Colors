var express = require('express');
var request = require('request');
var cookieParser = require('cookie-parser');
var app = express();

app.use(express.static(__dirname + '/public')).use(cookieParser());
app.listen(8888, () => console.log('Server initialized!'));
