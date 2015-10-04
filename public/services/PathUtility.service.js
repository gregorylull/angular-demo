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
