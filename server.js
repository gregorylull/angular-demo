(function () {
  
  'use strict';

   var express = require('express');
   var app = express();

   // config
   var port = process.env.PORT || 5000;

   // middle
   var router = express.Router();
   var bodyParser = require('body-parser');

   // middleware
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(express.static('bower_components'));
   app.use(express.static('public'));

   // simple routes
   app.get('/', function (request, response) {
    console.log('listening on port')
    res.sendFile('public/index.html');
   });


   // start application
   app.listen(port);

})();
