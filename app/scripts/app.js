'use strict';

/**
 * @ngdoc overview
 * @name ilearnApp
 * @description
 * # ilearnApp
 *
 * Main module of the application.
 */
// ng-app
angular
  .module('ilearnApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    // 'ngRoute',
    'ui.router',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/404');
    $stateProvider
      .state('home', {
        url: '',
        views: {
          'main-view': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl as mainCtrl'
          },
          'header-view': {
            templateUrl: 'views/header/default.html'
          },
          'footer-view': {
            templateUrl: 'views/footer/default.html'
          }
        }
      })
      .state('contact', {
        url: '/contact',
        views: {
          'main-view': {
            templateUrl: 'views/contact.html',
            controller: 'ContactCtrl'
          },
          'header-view': {
            templateUrl: 'views/header/default.html'
          },
          'footer-view': {
            templateUrl: 'views/footer/default.html'
          }
        }
      })
      .state('help', {
        url: '/help',
        views: {
          'main-view': {
            templateUrl: 'views/help.html'
          },
          'header-view': {
            templateUrl: 'views/header/default.html'
          },
          'footer-view': {
            templateUrl: 'views/footer/default.html'
          }
        }
      })
      .state('employees', {
        url: '/all',
        views: {
          'main-view': {
            templateUrl: 'views/employees.html',
            controller: 'EmployeesCtrl as empCtrl'
          },
          'header-view': {
            templateUrl: 'views/header/default.html'
          },
          'footer-view': {
            templateUrl: 'views/footer/default.html'
          }
        }
      })
      .state('employee', {
        url: '/employee/:id',
        views: {
          'main-view': {
            templateUrl: 'views/employee.html',
            controller: 'EmployeeCtrl as empCtrl'
          },
          'header-view': {
            templateUrl: 'views/header/default.html'
          },
          'footer-view': {
            templateUrl: 'views/footer/default.html'
          }
        }
      })
      .state('github', {
        url: '/general/github/:id',
        views: {
          'main-view': {
            templateUrl: 'views/github.html',
            controller: 'EmployeeCtrl as empCtrl'
          },
          'header-view': {
            templateUrl: 'views/header/default.html'
          },
          'footer-view': {
            templateUrl: 'views/footer/default.html'
          }
        }
      })
      .state('404', {
        url: '/404',
        views: {
          'main-view': {
            templateUrl: '404.html',
            controller: 'MainCtrl'
          }
        }
      })
    ;
    /*
     $routeProvider
     .when('/', {
     templateUrl: 'views/main.html',
     controller: 'MainCtrl',
     controllerAs: 'main'
     })
     .when('/about', {
     templateUrl: 'views/about.html',
     controller: 'AboutCtrl',
     controllerAs: 'about'
     })
     .otherwise({
     redirectTo: '/'
     });
     */

    $locationProvider.hashPrefix('');
  });
