'use strict';

/**
 * @ngdoc overview
 * @name ilearnApp
 * @description
 * # ilearnApp
 *
 * Main module of the application.
 */
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
      .state('about', {
        url: '/about',
        views: {
          'main-view': {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
          },
          'header-view': {
            templateUrl: 'views/header/custom.html'
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
