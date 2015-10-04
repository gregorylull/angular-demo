(function () {
  'use strict';

  console.log('initial index module loaded');

  var myDependencies = ['phq9.main'];

  angular.module('phq9', ['ui.router'].concat(myDependencies))
  .config(routes);

  // route
  function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: "/",
        template: '<h1>state: index : /</h1><div show-questions></div>'
      });
  }

  // works with minifier
  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();

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

(function () {
  'use strict';

  console.log('main directive loadeddddd');
  
})();
