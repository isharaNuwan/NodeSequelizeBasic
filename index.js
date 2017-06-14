var express = require('express');
var router = require('./router');
var bodyParser     =  require("body-parser");

var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());




var port = 3000;

app.use('/', router);





app.listen(port);
