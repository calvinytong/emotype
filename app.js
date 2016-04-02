var express = require('express');
var AlchemyAPI = require('alchemy-api');
var alchemy = new AlchemyAPI('73fdf24054081a04c8778d53196c022aac5195b8');
var app = express();
var port = process.env.PORT || 3000;

var myText = "Whoa, AlchemyAPI's Node.js SDK is really great, I can't wait to build my app!";

app.get('/', function(req, res) {
  res.send('Hello World');
  alchemy.sentiment("text", myText, {}, function(response) {
    res.send("Sentiment: " + response["docSentiment"]["type"]);
  });
});

app.listen(port, function() {

    console.log('Listening on port ' + port);
});
