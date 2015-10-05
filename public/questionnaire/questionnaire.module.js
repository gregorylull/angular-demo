//
(function () {
  'use strict';

  console.log('questionnaire module load');

  angular.module('phq9.questionnaire', [])
  .config(route)

  function route ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('phq9', {
      url: '/phq9',
      views: {
        '': {
          templateUrl: "questionnaire/questionnaire.view.html"
        },
        'content@phq9': {
          template: "<div data-question-answer></div>"
        }
      }
    })
  }

  route.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
