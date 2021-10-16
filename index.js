const express = require('express');
const url     = require('url');
const path    = require('path');
const app     = express();

app.use(express.urlencoded({extended:false}));
app.use('/', express.static(path.join(__dirname, 'night.css')));

app.use('/', express.static(path.join(__dirname, 'day.css')));
app.use('/', express.static(path.join(__dirname, 'index1.js')));

app.get('/', function(req,res) {
    res.sendFile(path.join(__dirname + 'index.html'));
});

app.post('/result', (req, res) => {
    res.redirect(url.format({
        pathname:"/output",
        query:req.body
    }));
});

app.get('/output', function(req,res) {
    res.send("");
});

app.listen(3000);