const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');

const app = express();

app.get('/',(req, res) => {
    res.send('Hello from ROOT mailer');
});

app.listen(8080, () => console.log('Server Started Correctly!'));