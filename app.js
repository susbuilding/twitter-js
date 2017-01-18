const express = require( 'express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes/');
const bodyParser = require('body-parser');

app.use('/', routes);

app.use(function (req, res, next){ //need this first
    console.log('Request:', req.method, req.path); //find status-getter
    next();
})

app.use('/special/', function (req, res, next){ //middleware- anything starting with special
    console.log('you reached the special area');
    next();
})

app.use(bodyParser.urlencoded({ extended: true })); //for HTML form submits for posting tweets

app.listen(3000, function(){
    console.log('server listening')
});

//boilerplate
app.set('view engine', 'html'); //where to find the views
app.engine('html', nunjucks.render); //what file extension do our templates have
nunjucks.configure('views', {
  noCache: true
});

//sol vid says: this is what views > index.html looks at to find title and people
var locals = {
  title: 'twatter',
  people: [
    {name: 'luisa'},
    {name: 'susanna'},
    {name: 'david bowie'}
  ]
}

nunjucks.render('index.html', locals, function (err, output) {
    if(err) return console.error(err);
    //console.log('rendering');
});
