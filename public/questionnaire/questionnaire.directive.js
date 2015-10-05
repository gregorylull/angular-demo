(function () {

  'use strict';

  angular.module('php9.questionnaire', [])
  .directive('showQuestions', function () {
    return {
      restrict: 'A',
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
