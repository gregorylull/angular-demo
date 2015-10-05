//
(function () {
  'use strict';

  console.log('main module load');

  angular.module('phq9.questionnaire', [])
  .config(route)

  function route ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('phq9', {
      url: '/phq9',
      views: {
        '': {
          templateUrl: "questionnaire/questionnaire.view.html"
        }
      }
    })
  }

  route.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
