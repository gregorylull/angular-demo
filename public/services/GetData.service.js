(function () {
  'use strict';

  angular.module('phq9')
  .factory('GetData', ['$http', function ($http) {

    return {
      getDoctors: getDoctors,
      getQuestions: getQuestions,
      getSeverity: getSeverity
    };

    function getDoctors(score) {
      return $http.get('api/data')
      .then(function (response) {
        console.log('what is getDoctors response: ', response.data)
        return response.data.doctors;
      })
      .catch(function (err) {
        console.log('there is err with getDoctors: ', err);
      });
    }

    function getSeverity(context) {
      return $http.get('api/data')
      .then(function (response) {
        context.severityScale = response.data.severityScale;
      })
      .catch(function (err) {
        console.log('there is err with getSeverity: ', err);
      });
    }

    function getQuestions(context) {
      return $http.get('api/data')
      .then(function (response) {
        context.questions = response.data.questions;
        context.answers = response.data.answers;
      })
      .catch(function (err) {
        console.log('there is err with getQuestions: ', err);
      });
    };

  }]);

})();
