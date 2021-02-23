// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.any("/", function (request, response) {
  response.json({hello: 'world', postType: request.method});
});

app.all("/api", function (request, response) {
    response.json({api: 'hello world', postType: request.method});
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});