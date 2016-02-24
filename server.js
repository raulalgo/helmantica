var path = require('path');
var express = require('express');

var app = express();
var PORT = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/build/index.html')
});

app.listen(PORT, function() {
  console.log("Server is up and running on port: " + PORT)
});
