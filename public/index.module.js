(function () {
  'use strict';

  // external vendor dependencies 
  var vendors = [
    'ui.router'
  ];

  // my dependencies
  var myDep = [
    'phq9.header'
    // 'phq9.main'
  ];

  angular
  .module('phq9', vendors.concat(myDep))
  .config(routes);

  // route
  function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: "/",
        template: "<div phq9-header>should be header</div>"
      });

    console.log('initial routes loaded');
  }

  // works with minifier
  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
