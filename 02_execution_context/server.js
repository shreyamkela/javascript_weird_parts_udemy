const express = require('express');

var app = express(); 

app.use(express.static(__dirname + '/public')); // Public folder call. This is express middleware. It deals public static files. Put this after maintanance express middleware
// express.static lets include external JavaScript file into an HTML file (main.html) when serving that HTML file with a response object in expressjs
// Include all such static content into the public folder
// Note that nowadays, html, css, js, etc files are not sent by the backend server to the frontend, everytime a request is made. Nowadays with frameworks like react and angular, html and js and all the file content is sent only on the first load of the website. This is possible with the help of a backend in nodejs which will send the files and a frontend 'server' on react/angular that receive the files. Next time the website is loaded, only json data is sent. And only relevant stuff change on the page and the rest remains the same. That is it is all dynamic. In older times everything was static and therefore sending the whole file is called as serving static files. express.static is thus used to serve static content. Nowadays it's mostly about the dynamic content
// Refer - https://stackoverflow.com/questions/29087318/how-do-i-include-an-external-javascript-file-when-serving-an-html-file-with-a-re#

app.get('/', (req, res) => { 
    res.sendFile('main.html'); //sendFile sends a whole file to be rendered. __dirname is used when full path is required, instead of './' Here we are not using res.render as res.render can render a view and not a file. So to render an html file with a view we have to create views and view engine 
});

app.listen(3000, () => { 
    console.log('Server is up on port 3000');
});