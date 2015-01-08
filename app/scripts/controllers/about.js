'use strict';

/**
 * @ngdoc function
 * @name wedPageApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the wedPageApp
 */
angular.module('wedPageApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
