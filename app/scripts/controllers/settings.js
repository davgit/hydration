'use strict';

angular.module('hydrationApp')
  .controller('SettingsCtrl', function ($scope, $rootScope) {

    $scope.set_unit = function(unit) {
      $rootScope.model.liquid_units = unit;
      $rootScope.save_model();
    }

  });
