// app.use(express.static(__dirname + '/public'));

const express = require('express');
const path = require('path');
const pug = require('pug');
// https://caolan.github.io/async/
const async = require('async');
const fileUpload = require('express-fileupload');
const app = express();

const index_router = require('./routes/index');
const employee_router = require('./routes/employee');
const general_router = require('./routes/general');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(fileUpload());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
    // res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/', index_router);
app.use('/employees', employee_router);
app.use('/general', general_router);



app.listen(3005, () => {
    console.log('listenting....');
});
