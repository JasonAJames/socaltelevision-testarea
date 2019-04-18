const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
var server = require('http').Server(app);
const nodemailer = require('nodemailer');

const app = express();

app.get('/mailer',(req, res) => {
    res.send('Hello from ROOT mailer');
});

var listener = server.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port ' + listener.address().port); //Listening on port 5000
});