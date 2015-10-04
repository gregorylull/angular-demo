(function () {
  'use strict';

  // external vendor dependencies 
  var vendors = [
    'ui.router'
  ];

  // my dependencies
  var myDep = [
    'phq9.header'
    // 'phq9.main'
  ];

  angular
  .module('phq9', vendors.concat(myDep))
  .config(routes)
  .constant('PP', {
    'c' : 'components/'
  });

  // route
  function routes ($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: "/",
        template: "<div phq9-header>should be header</div>"
      });

    console.log('initial routes loaded');
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

  angular.module('phq9.header', []);

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


  angular.module('phq9')
  .provider('PathU', function () {
    var paths = {
      component : 'components/'
    };

    this.$get = function () {
      return {
        getC: getComponent 
      };
    }
  
    function getComponent (templateName) {
      var parts = templateName.split('.');
      console.log('template name: ', templateName);
      return paths.component + parts[0] + '/' + templateName;
    }

  });

})();

(function () {
  'use strict';  
})();

(function () {
  'use strict';

  console.log('phq9.header module');

  angular.module('phq9.header')
  .directive('phq9Header', function (PathU) {

    console.log('phq9Header instantiated');

    return {
      restrict: 'A',
      templateUrl: PathU.getC('header.html'),
      scope: {},
      
      controller: function () {
        this.links = [
          'Questionnaire',
          'About'
        ];
      },

      controllerAs: 'headerCtrl',

      link: function (postScope, postElem, postAttrs) {

      }
    }; // end directive definition object

  }); // end directive.phq9Header

})();
