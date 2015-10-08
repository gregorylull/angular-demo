(function () {
  'use strict'

  angular.module('phq9.questionnaire')
  .directive('questionScore', function () {
    return {
      restrict: 'A',
      templateUrl: 'questionnaire/questionnaire.form.score.html',
      scope: {
        form: '=',
        formData: '=',
        sumTotal: '@',
        score: '=',
        selectRandomAnswers: '&',
        length: '@'
      },
      controller: ScoreController,
      controllerAs: 'scoreCtrl',
      bindToController: true
    } // end of DDO

    function ScoreController (GetData) {
      var vm = this;
      vm.data = {};
      GetData.getSeverity(vm.data);

      // anytime a radio button is clicked, it triggers a sum so that scores are constantly updated, similar to the actual site
      vm.sumRadioForm = sumRadioForm.bind(vm);

      // checks severity range and returns result
      vm.severityProcess = severityProcess.bind(vm);

      // this is registered on the parent scope, since there is two way binding, there is access for form data changes
      vm.score.tally = tally.bind(vm);

      // select random answers
  
    }

    /*-----------------------------------------------------------------------------
        HELPER METHODS
    -----------------------------------------------------------------------------*/
    

    function tally (form) {
      console.log('what is form: ', form);
      this.sumRadioForm(form);
      this.severityProcess(form);
      console.log('what is this: ', this);
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

  }); // end of directive

})(); // end of IEFE
