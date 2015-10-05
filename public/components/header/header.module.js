(function () {
  'use strict';

  angular.module('phq9.header', ['ui.router'])
  .config(routes);

  // 
  function routes ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('Questionnaire', {
    })

  }

  routes.$inject = ["$stateProvider", "$urlRouterProvider"];

})();
