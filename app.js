const express = require( 'express');
const app = express();

app.get('/', function(req,res) {
    res.send('Hello Twitter')
})




app.listen(3000, function(){
    console.log('server listening')
});
