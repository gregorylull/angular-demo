(function () {
  
  'use strict';

   var express = require('express');
   var app = express();

   // configuration
   var port = process.env.PORT || 5000;
   var questionsAndAnswers = require('./data.js');

   // middle
   var router = express.Router();
   var bodyParser = require('body-parser');

   // middleware
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(express.static('bower_components'));
   app.use(express.static('public'));

   // index
   app.get('/', function (request, response) {
    response.sendFile('public/index.html');
   });


  // data
  app.get('/api/questions', function (request, response) {
    response.send(questionsAndAnswers);
  });

   // start application
   app.listen(port);

})();
