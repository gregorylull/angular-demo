//
(function () {
  'use strict';

  console.log('home module load');

  angular.module('phq9.home', [])
  .config(route)

  function route ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home/home.html'
    })
  }

  route.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
