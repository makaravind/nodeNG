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
  .run(function ($stateParams) {
    console.log($stateParams)
    /**
      get executed after the injector is created and are used to kickstart the application.
      Only instances and constants can be injected into run blocks.
      This is to prevent further system configuration during application run time.

     Run blocks are the closest thing in Angular to the main method. A run block is the code which needs to run to kickstart the application. It is executed after all of the service have been configured and the injector has been created. Run blocks typically contain code which is hard to unit-test,
     and for this reason should be declared in isolated modules, so that they can be ignored in the unit-tests.
     */
    console.log("app run");
  })
  .config(function(){
    console.log('2 config')
})
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    console.log('11');
    $urlRouterProvider.otherwise('/404');
    $stateProvider
      .state('home', {
        url: '',
        views: {
          'main-view': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          },
          'header-view': {
            templateUrl: 'views/header/default.html'
          },
          'footer-view': {
            templateUrl: 'views/footer/default.html'
          }
        }
      })
      .state('root', {
        url: '/',
        views: {
          'main-view': {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
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
