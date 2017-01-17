const express = require( 'express');
const app = express();
const nunjucks = require('nunjucks');
const routes = require('./routes/');

app.use('/', routes);

app.use(function (req, res, next){ //need this first
    console.log('Request:', req.method, req.path); //find status-getter
    next();
})

app.use('/special/', function (req, res, next){ //middleware- anything starting with special
    console.log('you reached the special area');
    //res.send('you reached the special area');
    next();
})
// app.get('/', function(req,res) {
//     res.render('index.html', locals);
// })
//
// app.get('/news', function(req,res) {
//     res.send('Hello news')
// })

app.listen(3000, function(){
    console.log('server listening')
});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {
  noCache: true,
  express: app
});

var locals = {
  title: 'twatter',
  people: [
    {name: 'luisa'},
    {name: 'susanna'},
    {name: 'david bowie'}
  ]
}

nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
