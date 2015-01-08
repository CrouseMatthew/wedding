'use strict';

/**
 * @ngdoc overview
 * @name wedPageApp
 * @description
 * # wedPageApp
 *
 * Main module of the application.
 */
angular
  .module('wedPageApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
