/*-----------------------------------------------------------------------------
    Calculate answers based on a tally
-----------------------------------------------------------------------------*/


(function () {

  'use strict';

  var app = angular.module('phq9.questionnaire');

/*-----------------------------------------------------------------------------
      Directive to display a list of questions and answer choices
-----------------------------------------------------------------------------*/

  app
  .directive('questionAnswer', function () {
    console.log('triggered?');
    return {
      restrict: 'A',
      scope: {
      },
      controller: QuestionCtrl,
      controllerAs: 'qCtrl',
      templateUrl: 'questionnaire/questionnaire.html'
    }
  });

  function QuestionCtrl (GetQuestions) {
    var vm = this;
    vm.data = {};
    vm.checkDoctors = false;
    vm.sumTotal = 0;

    GetQuestions(vm.data);

    vm.formData = {};

    // anytime a radio button is clicked, it triggers a sum
    vm.sum = sumRadioForm.bind(vm);

    //
    vm.submit = submit.bind(vm);

  }

  // dependencies
  QuestionCtrl.$inject = ['GetQuestions']

  function sumRadioForm (form) {
    var sum = 0;
    for (var answer in form) {
      sum += parseInt(form[answer], 10)
      console.log('what is form[answer]: ', answer, form[answer]);
    }
    this.sumTotal = sum;
  }

  function submit () {
    this.checkDoctors = true;
  }


})();
