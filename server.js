'use strict';
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

function compile(str, path) {
  // compile function for stylus
  return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(stylus.middleware(
  {
    src: __dirname + '/public',
    compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

if (env === 'development') {
  //$ NODE_ENV=development nodemon server.js
  mongoose.connect('mongodb://localhost/multivision');
} else if (env === 'production') {
  //$ NODE_ENV=production nodemon server.js
  mongoose.connect('mongodb://dcole:multivision@ds057944.mongolab.com:57944/multivision');
}

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log(new Date() + ': ...multivision db opened...');
});

app.get('/partials/:partialPath', function(req, res) {
  res.render('partials/' + req.params.partialPath)
});

app.get('*', function(req, res) {
  res.render('index');
});

var port = process.env.PORT || 3030;
app.listen(port);

console.log(new Date() + ': Listening on port ' + port + '...');
