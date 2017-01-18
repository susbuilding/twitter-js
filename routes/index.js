const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
module.exports = router;

router.use(express.static('public'))

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true});
});

router.get('/users/:name', function(req,res,next){
  let tweets = tweetBank.list();
  var userTweets = tweetBank.find({name: req.params.name});
  res.render( 'index', {
    tweets: userTweets,
    showForm: true,
    name: req.params.name //makes it possible to autofill name using {{name}} in index.html
  });
});

router.get('/tweets/:id', function(req,res,next){
  let tweets = tweetBank.list();
  var uniqueUserTweet = tweetBank.find({id: Number(req.params.id)})
  res.render('index', {
    title: 'Twitter.js',
    tweets: uniqueUserTweet
  });
});

//creating a tweet
//does not work because req.body does not work
router.post('/tweets', function(req,res,next){
  // console.log(req.body);
  // var name = req.body.name;
  // var text = req.body.text;
  // tweetBank.add(name,text);
  res.send('Got your tweet'); //this is annoying but im testing it
  res.redirect('/'); //sends client back to root
});

