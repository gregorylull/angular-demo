//
(function () {
  'use strict';

  console.log('main module load');

  angular.module('phq9.main', [])
  .directive('showQuestions', function () {
    return {
      restrict: 'A',
      templateUrl: 'main/main.html',
      scope: {},
      controller: showQuestionsCtrl,
      controllerAs: 'questionsCtrl'
    }
  });

  function showQuestionsCtrl (GetQuestions) {
    this.data = {};
    GetQuestions(this.data);
    console.log('what is GetQuestions', GetQuestions);
  }

  showQuestionsCtrl.$inject = ['GetQuestions']

})();
