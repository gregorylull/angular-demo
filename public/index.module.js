(function () {
  'use strict';

  // external vendor dependencies 
  var vendors = [
    'ui.router'
  ];

  // my dependencies
  var myDep = [
    'phq9.header',
    'phq9.navbar'
  ];

  angular
  .module('phq9', vendors.concat(myDep))
  .config(routes);

  // route
  function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: "/",
        views: {

          "" : {
            templateUrl: "main/main.html"
          },

          "header@home": {
            template: "<div phq9-header>head</div>"
          },

          "navbar@home": {
            template: "<div phq9-navbar>navbar</div>"
          },

          "body@home": {
            template: "<div phq9-body>body</div>"
          }
        }
      });

    console.log('initial routes loaded');
  }

  // works with minifier
  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
