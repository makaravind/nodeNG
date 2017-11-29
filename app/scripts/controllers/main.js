'use strict';

/**
 * @ngdoc function
 * @name ilearnApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ilearnApp
 */
angular.module('ilearnApp')
  .controller('MainCtrl', ['$scope', '$state', 'EmployeeAPIHandler',
    function ($scope, $state, EmployeeAPIHandler) {

    var vm = this;

    vm.getEmpDetail = getEmpDetail;
    vm.deleteEmp = deleteEmp;
    vm.getEmpGitHubRepos = getEmpGitHubRepos;

    function getEmpDetail() {
      $state.go('employee', {id: $scope.emp.id});
    }

    function deleteEmp() {
      var _id = $scope.emp.id;
      EmployeeAPIHandler.deleteEmp(_id).then(function (res) {
        window.alert("Successfully Deleted!" + _id);
      });
    }

    function getEmpGitHubRepos () {
      $state.go('github', {id: $scope.emp.id});
    }

  }]);
