const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hi');
})

app.get('/home', function(req, res){
    res.send('Sample API Running');
})

app.listen(3000, function(){
    console.log('server started on port 3000')
})