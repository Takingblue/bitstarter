var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buffer_in = fs.readFileSync('index.html');
var word = buffer_in.toString('utf8', 0, buffer_in.length);

app.get('/', function(request, response) {
  response.send(word);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
