'use strict';

angular.module('hydrationApp')
  .controller('MainCtrl', function ($scope) {
    $scope.thingy = [];
    for (var i=0; i < 20; i++) {
      $scope.thingy.push(i);
    }
  });
