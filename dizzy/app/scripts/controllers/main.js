'use strict';

/**
 * @ngdoc function
 * @name dizzyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dizzyApp
 */
angular.module('dizzyApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
