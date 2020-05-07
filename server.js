'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var expect = require('chai').expect;
var cors = require('cors');
var helmet = require('helmet');

var apiRoutes = require('./routes/api.js');

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));

//helmet requirements
app.use(helmet.noSniff());
app.use(helmet.xssFilter());
app.use(helmet.contentSecurityPolicy({ directives: {defaultSrc: ["'self'"], scriptSrc:["'self'"]}}))
app.use(helmet.frameguard({ action: "sameorigin" }));
app.use(helmet.dnsPrefetchControl())



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Index page (static HTML)
app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
  });


//Routing for API 
apiRoutes(app);

//404 Not Found Middleware
app.use(function (req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found');
});

//Start our server and tests!
app.listen(3000, function () {
  console.log("Listening on port " + 3000);
  console.log("Go to localhost:3000")
});

module.exports = app; //for testing
