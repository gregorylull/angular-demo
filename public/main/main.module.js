//
(function () {
  'use strict';

  console.log('main module load');

  angular.module('phq9.main', [])
  .config(route)

  function route ($stateProvider, $urlRouterProvider) {
  }

  route.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
