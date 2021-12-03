const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/projectWebApp'));
app.get('/blog', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/projectWebApp/index.html'));
});
app.get('/all-proyects', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/projectWebApp/index.html'));
});

app.listen(process.env.PORT || 8080);
