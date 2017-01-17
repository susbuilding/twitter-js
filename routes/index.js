const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.use(express.static('public'))

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true} );
});

router.get('/users/:name', function(req,res){
  var name = req.params.name;
  let tweets = tweetBank.list();
  var userTweets = tweetBank.find( {name: name} );
  res.render( 'index', {tweets: userTweets} );
});


router.get('/tweets/:id', function(req,res){
  var id = Number(req.params.id);
  let tweets = tweetBank.list();
  var uniqueTweet = tweetBank.find({id: id})
  res.render('index', {tweets: uniqueTweet})
});

module.exports = router;
