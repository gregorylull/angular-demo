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
    return {
      restrict: 'A',
      scope: {},
      controller: QuestionCtrl,
      controllerAs: 'qCtrl',
      templateUrl: 'questionnaire/questionnaire.form.html'
    }
  });

  function QuestionCtrl ($scope, GetData) {
    var vm = this;
    
    //
    // Controller PROPERTIES
    // 

    // access to modal
    vm.modal = {};
    
    // initial values score for depression scale
    vm.sumTotal = 0;
    vm.severity = 'nothing yet...';

    // selected answer choices will be saved to this object
    vm.formData = {};

    // vm.data is the context/object which contains a promise to question/answers retrieved from the server
    vm.data = {};
    GetData.getQuestions(vm.data);
    GetData.getSeverity(vm.data);

    //
    // Controller METHODS
    //

    // anytime a radio button is clicked, it triggers a sum so that scores are constantly updated, similar to the actual site
    vm.sum = sumRadioForm.bind(vm);

    // checks severity range and returns result
    vm.severityProcess = severityProcess.bind(vm);

    // when form data is changed (e.g. radio button clicked), the results get processed continuously
    vm.processForm = processForm.bind(vm);

    // when the submit button is clicked, it will send the score to the backend, and retrieve a list of doctors displayed as a modal
    vm.submit = submit.bind(vm);

    // for testing purposes, selects random answers, aka using two way binding create answers on model: qCtrl.formData['answer' + $parent.$index]
    vm.selectRandomAnswers = selectRandomAnswers.bind(vm);

    vm.digest = function () {
      // $scope.apply();
    };

  }
  // dependencies
  QuestionCtrl.$inject = ['$scope', 'GetData'];



/*-----------------------------------------------------------------------------
    Controller METHOD defintions
-----------------------------------------------------------------------------*/

  // process form does two things, it calculates sum, then based on the sum it calculates severity
  function processForm (form) {
    this.sum(form);
    this.severityProcess(form);
  }

  // adds up the scores for questionnaire
  // if our app had to sum form values very often, we should create a service instead
  function sumRadioForm (form) {
    var sum = 0;
    for (var answer in form) {
      sum += parseInt(form[answer], 10)
      console.log('what is form[answer]: ', answer, form[answer]);
    }

    // directily updates property on scope, has two way binding
    this.sumTotal = sum;
  }

  function severityProcess (form) {
    var result = null;
    var score = parseInt(this.sumTotal, 10);
    this.data.severityScale.forEach(function (scale) {
      if (scale.min <= score && score <= scale.max) {
        result = scale.s;
      }
    });

    this.severity = result;
  }

  // if form is valid, open up a modal window with doctor names
  function submit (form, score) {
    // this binding is on the child directive: questionModal
    this.modal.open(score);
  }

  // select random answers
  function selectRandomAnswers (form) {
    var vm = this;
    var questions = vm.data.questions;
    console.log(vm.data);
    for (var i = 0; i < questions.length; i++) {
      var randomAnswer = Math.floor(Math.random() * vm.data.answers.length);
      var answerValue = vm.data.answers[randomAnswer][1];

      vm.formData['answer' + i] = parseInt(answerValue);

      console.log(vm.formData);
    }

    vm.digest();
    vm.processForm(vm.formData);
  }

})();
