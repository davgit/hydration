'use strict';

angular.module('hydrationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.amount = 0;


    $scope.large_glass = function() {
      $scope.amount = ($scope.amount + 10)%110;
    };

    $scope.small_glass = function() {
      $scope.amount = Math.abs(($scope.amount - 10)%110);
    };

  });
