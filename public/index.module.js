(function () {
  'use strict';

  // external vendor dependencies 
  var vendors = [
    'ui.router'
  ];

  // my dependencies
  var myDep = [
    'phq9.header',
    'phq9.navbar',
    'phq9.home',
    'phq9.questionnaire',
    'phq9.about'
  ];

  angular
  .module('phq9', vendors.concat(myDep))
  .config(routes);

  // route
  function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    console.log('initial routes loaded');
  }

  // works with minifier
  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
