var path = require('path');
var http = require('http');
var express = require('express');
var PORT = process.env.PORT || 8080;

var app = express();
var httpServer = http.Server(app);

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '~/build/index.html')
});

app.listen(PORT, function() {
  console.log("Server is up and running on port: " + PORT)
});
