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
  function DoctorModalInstanceCtrl ($state, $modalInstance, items) {

    var vm = this;
    vm.items = items;

    // this property controls which html block is showing in questionnaire.modal.html based on ng-show/ng-hide
    vm.selectedDoctor = false;
    vm.pleaseSelect = false;

    vm.selected = {
      item: false
    };

    // select doctor
    vm.submit = function () {
      // hide doctor selection block
      if (vm.selected.item) {
        vm.selectedDoctor = true;
      } else {
        vm.pleaseSelect = true;
      }
    };

    // confirmation / thank you note that a doctor was selected
    vm.return = function (event, route) {
      event.preventDefault();
      $modalInstance.close(vm.selected.item);
      $state.transitionTo(route, {
        relative: false
      });
    }

    // do nothing
    vm.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }

})();
