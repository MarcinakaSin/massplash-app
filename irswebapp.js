/*
Create server-side MVC apps with Node.js and Express 
https://www.youtube.com/watch?v=QseHOX-5nJQ

Also instructs setup for Azure.
12factor.net
*/



var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// configure app

app.set('view engine', 'ejs'/*embedded javascript*/);
app.set('views', path.join(__dirname, 'views'));

// use middleware

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser());

// define routes

app.use(require('./todos'));

// start the server

var port = process.env.PORT || 1337;

app.listen(port, function() {
	console.log('ready on port ' + port);
});




/*var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');*/
