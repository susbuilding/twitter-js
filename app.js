const express = require( 'express');
const nunjucks = require('nunjucks');
const app = express();


app.use(function (req, res, next){ //need this first
    console.log('Request:', req.method, req.path); //find status-getter
    next();
})

app.use('/special/', function (req, res, next){ //middleware- anything starting with special
    console.log('you reached the special area');
    //res.send('you reached the special area');
    next();
})

app.get('/', function(req,res) {
    res.render('index.html');
})

app.get('/news', function(req,res) {
    res.send('Hello news')
})

app.listen(3000, function(){
    console.log('server listening')
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);

var locals = {
  title: 'twatter',
  people: [
    {name: 'luisa'},
    {name: 'susanna'},
    {name: 'david bowie'}
  ]
}

nunjucks.configure('views', {
  noCache: true,
  express: app
});

nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
