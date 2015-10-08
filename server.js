(function () {
  
  'use strict';

   var express = require('express');
   var app = express();

   // configuration
   var port = process.env.PORT || 5000;

   // middle
   var bodyParser = require('body-parser');

   // middleware
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: true}));
   app.use(express.static('bower_components'));
   app.use(express.static('public'));

  /*-----------------------------------------------------------------------------
      Routes to mimic an API for backend data retrieval
  -----------------------------------------------------------------------------*/
  // data.js is in top level folder, not connected to any database 
  var data = require('./data.js');
  
  app.get('/api/data', function (request, response) {
    response.send(data);
  });

  /*-----------------------------------------------------------------------------
      Routes for redirection to index   
  -----------------------------------------------------------------------------*/
  
   // since this is a single page application, we just need to send the index page
   app.get('/', function (request, response) {
    response.sendFile('public/index.html');
   });

  // catch all and send to index
  app.use("*",function(req,res){
    res.sendFile('public/index.html');
  });

   // start application
   app.listen(port);

})();
