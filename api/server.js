// server.js
// where your node app starts

// init project
var express = require('express');
var cors = require('cors')
var app = express();

app.use(cors())
// http://expressjs.com/en/starter/basic-routing.html
app.all("/", function (request, response) {
  response.json({hello: 'world', postType: request.method});
});

app.all("/api", function (request, response) {
    response.json({api: 'hello world', postType: request.method});
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});