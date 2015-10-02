(function () {
  console.log('loaded?');

  angular.module('phq9', ['ui.router'])
  .config(routes);

  // 
  function routes ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('index', {
        url: "/",
        template: '<h1>state: index</h1>'
      });
  }

  routes.$inject = ['$stateProvider', '$urlRouterProvider'];

})();
