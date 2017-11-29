'use strict';

angular.module('ilearnApp')
  .controller('EmployeesCtrl', ['$scope', 'EmployeeAPIHandler', function ($scope, EmployeeAPIHandler) {

    var vm = this;

    init();

    function init() {
      vm.employees = [];
      loadEmployees();
    }

    function loadEmployees() {
      EmployeeAPIHandler.getAllEmployees().then(function (res) {
        vm.employees = res.data;
      }, function (err) {
        console.log('error');
      });
    }

}]);
