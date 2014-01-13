'use strict';

angular.module('hydrationApp')
  .controller('MainCtrl', function ($scope, waterRecord) {
    $scope.today_amount_percentage = waterRecord.today_amount_percentage;

    $scope.large_glass = function() {
      waterRecord.add_amount(waterRecord.AMOUNTS.LARGE_GLASS);
    };

    $scope.small_glass = function() {
      waterRecord.add_amount(waterRecord.AMOUNTS.SMALL_GLASS);
    };

  });
