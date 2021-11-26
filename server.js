const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/projectWebApp'));
app.get('/blog', '/sobre-mi', function(req,res) {
    res.sendFile(path.join(__dirname+'/dist/projectWebApp/index.html'));
});

app.listen(process.env.PORT || 8080);
