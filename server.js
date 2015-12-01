var express = require('express');

var server=express();


var port = process.env.PORT || 3000;

server.use(express.static('build'));

server.get('/', function(req,res) {
 res.send('./build/index.html');
});

server.listen(port);