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
