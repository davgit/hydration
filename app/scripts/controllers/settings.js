'use strict';

angular.module('hydrationApp')
  .controller('SettingsCtrl', function ($scope, $rootScope) {

    var kg_to_lb = function(kilo) {
      return Math.round(kilo * 2.20462 * 100) / 100;
    }

    $scope.settings_state = {
      weight_lbs: kg_to_lb($scope.model.weight)
    }

    $scope.kg_change = function() {
      $scope.settings_state.weight_lbs = kg_to_lb($scope.model.weight);
      $rootScope.save_model();
    }

    $scope.lbs_change = function() {
      $scope.model.weight = Math.round($scope.settings_state.weight_lbs / 2.20462 * 100) / 100;
      $rootScope.save_model();
    }

    $scope.set_unit = function(unit) {
      $rootScope.model.liquid_units = unit;
      $rootScope.save_model();
    }

  });
