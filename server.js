process.env.NODE_ENV = 'production';

var path = require('path');
var express = require('express');
var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, '/build')));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(request, response) {
  response.render(__dirname + '~/build/index.html')
});

app.listen(PORT, function() {
  console.log("Server is up and running on port: " + PORT)
});
