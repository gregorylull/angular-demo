//
(function () {
  'use strict';

  console.log('questionnaire module load');

  angular.module('phq9.questionnaire', ['ui.bootstrap'])
  .config(route)

  function route ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('phq9', {
      url: '/phq9',
      views: {
        '': {
          templateUrl: "questionnaire/questionnaire.view.html"
        },
        'form@phq9': {
          // data-question-answer is registered as a directive in questionnaire.form.directive.js
          template: "<div data-question-answer></div>"
        }
      }
    })
  }

  route.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
