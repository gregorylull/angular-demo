(function () {
  'use strict';

  angular.module('phq9.questionnaire')
  .directive('questionModal', function () {
    return {
      restrict: 'A',
      controller: DoctorModalInit,
      controllerAs: 'dmCtrl',
      scope: {
        modal: "=parent"
      },
      bindToController: true
    }
  })
  .controller('DoctorModalInstanceCtrl', DoctorModalInstanceCtrl)

  // upon clicking the submit button, this controller instantiates and creates a modal window for doctor selection
  function DoctorModalInit ($modal, GetData) {

    var vm = this;

    // this binding is a two way connection with the parent directive's controller, adding an open method so that on submissin of the form, it triggers this function
    vm.modal.open = open.bind(vm);

    function open (score) {
      var vm = this;

      // create instance
      var modalInstance = $modal.open({
        animation: false,
        templateUrl: 'questionnaire/questionnaire.modal.html',
        controller: 'DoctorModalInstanceCtrl',
        controllerAs: 'dmInstCtrl',
        resolve: {
          items: function () {
            var response = GetData.getDoctors(score);
            console.log('get response: ', response);
            return response;
          }
        }
      });

      // how to process
      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        console.log('Modal dismissed: ', new Date());
      });

    }
  }

  // per the documentation for ui.router, this controls the logic of the modal window once it pops open
  function DoctorModalInstanceCtrl ($modalInstance, items) {

    var vm = this;
    vm.items = items;

    vm.selected = {
      item: false
    };

    vm.ok = function () {
      // here we can send the data back to the server
      $modalInstance.close(vm.selected.item);
    };

    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }

})();
