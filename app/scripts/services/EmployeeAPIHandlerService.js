(function() {
  'use strict';

  angular
    .module('ilearnApp')
    .service('EmployeeAPIHandler', CSCampusesService);

  CSCampusesService.$inject = ['$http', 'AppConstants'];

  function CSCampusesService($http, constants) {
    var vm = this;

    vm.getAllEmployees = getAllEmployees;
    vm.getEmployee = getEmployee;
    vm.putNewDetail = putNewDetail;
    vm.deleteEmp = deleteEmp;
    vm.getEmpGitHubRepos = getEmpGitHubRepos;

    function getAllEmployees() {
      return $http.get(constants.BASE + constants.GET_EMPLOYEES);
    }

    function getEmployee(id) {
      return $http.get(constants.GET_EMPLOYEE + id);
    }

    function putNewDetail(empId, key, value) {
      return $http.put(constants.PUT_EMPLOYEE + empId + key + value);
    }

    function deleteEmp(empId) {
      return $http.delete(constants.DELETE_EMPLOYEE + empId);
    }

    function getEmpGitHubRepos(empId) {
      return $http.get(constants.GET_EMPLOYEE_GH + empId);
    }

    function createEmp(empDetails) {
      return $http.delete(constants.POST_EMPLOYEE, empDetails);
    }
  }
})();
