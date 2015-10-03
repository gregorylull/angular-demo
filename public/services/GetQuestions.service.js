(function () {
  'use strict';

  angular.module('phq9')
  .factory('GetQuestions', ['$http', function ($http) {
    return function (context) {
      $http.get('api/questions')
      .then(function (response) {
        context.questions = response.data.questions;
        context.answers = response.data.answers;
      })
      .catch(function (err) {
        console.log('there is err with GetQuestions');
      });
    };
  }]);

})();
