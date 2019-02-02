const express = require('express');

var app = express(); // make an app/application server that handles requests

app.get('/', (req, res) => { // / is the root or landing page/route of your application/website. Here we are defining what happens when user visits the '/' page. req defines all the data/flags etc the user has sent i.e req can be set by the user input and then by analysis req we can determine what to send back. res is the response we send back
    //res.send('Hello Express!');
    //res.send('<h1>Hello Express!</h1>'); // Content type that gets sent is text/html
    path = '02_execution_context'
    res.render('02_execution_context/003_global.html');
});

// To let the application listen/start at a particular port number:
// app.listen(3000);
app.listen(3000, () => { // We can also pass a function as the second argument to listen
    console.log('Server is up on port 3000');
});