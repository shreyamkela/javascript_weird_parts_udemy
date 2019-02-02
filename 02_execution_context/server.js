const express = require('express');

var app = express(); 

app.get('/', (req, res) => { 
    res.sendFile(__dirname + '/003_global.html'); //sendFile sends a whole file to be rendered. __dirname is used when full path is required, instead of './' Here we are not using res.render as res.render can render a view and not a file. So to render an html file with a view we have to create views and view engine 
});

app.listen(3000, () => { 
    console.log('Server is up on port 3000');
});