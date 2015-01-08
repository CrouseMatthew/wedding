'use strict';

/**
 * @ngdoc function
 * @name wedPageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wedPageApp
 */
angular.module('wedPageApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
