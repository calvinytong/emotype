var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');

var myText = "Whoa, AlchemyAPI's Node.js SDK is really great, I can't wait to build my app!";
var alchemyurl = 'http://gateway-a.watsonplatform.net/'


app.get('/', function(req, res) {
  res.send('Hello World');
  var propertiesObject = { apikey:'test1', text:'textbody', outputMode: 'json' };
  request({url:alchemyurl + 'calls/text/TextGetEmotion', qs = propertiesObject, function(err, response, body {
      console.log("Get response: " + response.statusCode);
    });
  });
});

app.listen(port, function() {

    console.log('Listening on port ' + port);
});
