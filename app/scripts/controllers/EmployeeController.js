'use strict';

angular.module('ilearnApp')
  .controller('EmployeeCtrl', ['$scope', '$state','EmployeeAPIHandler',
    function ($scope, $state, EmployeeAPIHandler) {

    var vm = this;
    vm.addNewDetail = addNewDetail;
    vm.enableAdd = toggleAdd;

    init();

    function init() {
      vm.employees = [];
      vm.showAddControl = false;
      if(!isNaN(parseInt($state.params.id))) {
        loadEmployeeDetail($state.params.id);
        vm.creating = false;
      } else if($state.params.id === 'add') {
        vm.employee = {};
        vm.creating = true;
      } else {
        $state.go('404');
      }
    }

    function loadEmployeeDetail(id) {
      EmployeeAPIHandler.getEmployee(id).then(function (res) {
        vm.employee = {'name': 'Aravind M', 'id': 1}; // extra details
      }, function (err) {
        console.log('error');
      });
    }

    function addNewDetail() {
      EmployeeAPIHandler.putNewDetail($state.params.id, $scope.new.key, $scope.new.value).then(function (res) {
        console.log('submiteed');
      }, function (err) {
        console.log('could not submit');
      });
    }

    function toggleAdd() {
      vm.showAddControl = !vm.showAddControl;
    }
}]);
