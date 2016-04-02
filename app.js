var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');


var myText = "Whoa, AlchemyAPI's Node.js SDK is really great, I can't wait to build my app!";
var alchemyurl = 'http://gateway-a.watsonplatform.net/'
var key = '73fdf24054081a04c8778d53196c022aac5195b8'

app.get('/', function(req, res) {
  res.send("hello world");
  var params: {
        "apikey": key,
        "text": myText,
        "outputMode": "json",
        "showSourceText": 1
      }
  request({url:alchemyurl + 'calls/text/TextGetEmotion', qs:params}, function(err, response, body) {
    console.log("Get response: " + response.statusCode);
  });
});
app.listen(port, function() {

    console.log('Listening on port ' + port);
});
