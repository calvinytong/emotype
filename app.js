var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var request = require('request');
var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
// var spotifyApi = new SpotifyWebApi({
//   clientId : '7aa17209a0744dba99ccba06f49e9681',
//   clientSecret : 'a5c46bb79af74bfbb91d6d5bf69e622a',
//   redirectUri : 'http://emotype.herokuapp.com/callback'
// });

var scopes = ['playlist-read-private', 'user-top-read'],
    redirectUri = 'http://emotype.herokuapp.com/callback',
    clientId = '7aa17209a0744dba99ccba06f49e9681',

// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri : redirectUri,
  clientId : clientId
});

// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);


// https://accounts.spotify.com:443/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=code&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice
console.log(authorizeURL);



// var myText = "Whoa, AlchemyAPI's Node.js SDK is really great, I can't wait to build my app!";
var alchemyurl = 'http://gateway-a.watsonplatform.net/'
var spotifyurl = 'https://api.spotify.com/v1/users/'
var key = '73fdf24054081a04c8778d53196c022aac5195b8'

app.get('/', function (req, res) {
  res.status(200).send('Hello world!');
  request.post('authorizeURL');
});

app.get('/callback', function(req,res) {
  console.log(req);
})

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
