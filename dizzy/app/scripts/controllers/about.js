'use strict';

/**
 * @ngdoc function
 * @name dizzyApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dizzyApp
 */
angular.module('dizzyApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
