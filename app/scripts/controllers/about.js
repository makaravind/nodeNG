'use strict';

/**
 * @ngdoc function
 * @name ilearnApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ilearnApp
 */
angular.module('ilearnApp')
    .controller('AboutCtrl', function () {
      var vm = this;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      vm.test = "hii";

  });
