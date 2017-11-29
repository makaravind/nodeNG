(function() {
  'use strict';

  angular
    .module('ilearnApp')
    .constant('AppConstants', {

        BASE : 'http://localhost:3005',
        GET_EMPLOYEES : '/employees/all',
        GET_EMPLOYEE: "?id=",
        DELETE_EMPLOYEE: '',
        GET_EMPLOYEE_GH: '',
        POST_EMPLOYEE: ''
    });
})();
