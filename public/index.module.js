(function () {
  'use strict';

  console.log('initial index module loaded');

  var myDependencies = ['phq9.main'];

  angular.module('phq9', ['ui.router'].concat(myDependencies))
  .config(routes);

  // route
  function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: "/",
        template: '<h1>state: index : /</h1><div show-questions></div>'
      });
  }

  // works with minifier
  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
