'use strict';

angular.module('hydrationApp')
  .controller('MainCtrl', function ($scope, waterRecord) {
    $scope.today_amount = waterRecord.today_amount;

    $scope.large_glass = function() {
      waterRecord.add_amount(20);
    };

    $scope.small_glass = function() {
      waterRecord.add_amount(10);
    };

  });
