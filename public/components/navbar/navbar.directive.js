(function () {
  'use strict';

  angular.module('phq9.navbar', [])
  .directive('phq9Navbar', ['PathU', function (PathU) {
  
    return {
      restrict: 'A',
      scope: {},
      templateUrl: PathU.getC('navbar.html'),
      controller: function () {
        this.links = [
          'Questionnaire',
          'About This page'
        ];
      },

      controllerAs: 'navbarCtrl'
    }; // end DDO (directive definition object)

  }]); // end phq9Navbar directive

})();
