var express = require('express');
const path = require('path');
var server=express();
var port = process.env.PORT || 3000;

// server.use(express.static(__dirname("") + "/build"));

server.get("/", function(req,res) {
 res.sendFile(path.join(__dirname + "/build/index.html"));
});

server.listen(port);