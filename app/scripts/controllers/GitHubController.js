'use strict';

angular.module('ilearnApp')
  .controller('GHCtrl', ['$scope', '$state', 'EmployeeAPIHandler',
    function ($scope, $state,EmployeeAPIHandler) {

    var vm = this;

    init();

    function init() {
      vm.repos = [];
      loadRepos();
    }

    function loadRepos() {
      EmployeeAPIHandler.getEmpGitHubRepos($state.params.id).then(function (res) {
        vm.repos = res.data;
      }, function (err) {
        console.log('error');
      });
    }

  }]);
