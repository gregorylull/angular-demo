(function () {
  'use strict';

  console.log('initial index module load');

  angular.module('phq9', ['ui.router'])
  .config(routes);

  // 
  function routes ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: "/",
        template: '<h1>state: index : /</h1>'
      });
  }

  // works with minifier
  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();

//
(function () {
  'use strict';

  console.log('main module load');

})();

(function () {
  'use strict';

  console.log('main directive loaded');
  
})();
