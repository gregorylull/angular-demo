//
(function () {
  'use strict';

  console.log('main module load');

  angular.module('phq9.about', [])
  .config(route)

  function route ($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('about', {
      url: '/about',
      views: {
        "": {
          templateUrl: "about/about.view.html"
        },
        "body@about": {
          template: "Stay tuned..."
        }
      }
    })
  }

  route.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
