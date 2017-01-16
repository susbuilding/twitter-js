const express = require( 'express');
const app = express();


app.use(function (req, res, next){ //need this first
    console.log('Request:', req.method, req.path);
    next();
})

app.use('/special/', function (req, res, next){ //middleware- anything starting with special
    console.log('you reached the special area');
    next();
})

app.get('/', function(req,res) {
    res.send('Hello Twitter')
})

app.get('/news', function(req,res) {
    res.send('Hello news')
})

app.listen(3000, function(){
    console.log('server listening')
});
