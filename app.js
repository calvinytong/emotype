var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');


// var myText = "Whoa, AlchemyAPI's Node.js SDK is really great, I can't wait to build my app!";
var alchemyurl = 'http://gateway-a.watsonplatform.net/'
var spotifyurl = 'https://api.spotify.com/v1/users/'
var key = '73fdf24054081a04c8778d53196c022aac5195b8'

app.get('/', function (req, res) { res.status(200).send('Hello world!') });

app.get('/spotify', function(req,res) {
    var params = {
        "playlist":null,
        "user":null
    };
    text = req.query.emotion;
    if(text==="joy") {
        params["playlist"]='6uTuhSs7qiEPfCI3QDHXsL';
        params["user"]='spotify/';
    } else if(text==="sadness") {
        params["playlist"]='6ejgjp55cJWGzcDOp4HpGC';
        params["user"]='spotify/';
    } else if(text==="disgust") {
        params["playlist"]='4GxkvXNhNxX6qxLqNNjg9D';
        params["user"]='happy_psycho/';
    } else if(text==="anger") {

    } else if(text==="fear") {

    } else {

    }
    // request({url:spotifyurl + params["user"] + 'playlists/' + params["playlist"]})
  });




app.get('/emotion', function(req, res) {
  text = req.query.text;
  var params = {
        "apikey": key,
        "text": text,
        "outputMode": "json",
        "showSourceText": 1
      };
  request({url:alchemyurl + 'calls/text/TextGetEmotion', qs:params}, function(err, response, body) {
    var data = JSON.parse(body);
    console.log(data.docEmotions);
    res.send(data);
    res.status(200);
  });
});

app.get('/callback', function(req, res) {

});

app.listen(port, function() {
    console.log('Listening on port ' + port);
});
