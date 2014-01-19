'use strict';

angular.module('hydrationApp')
  .directive('weightSetting', function ($rootScope) {
    var kg_to_lb = function(kilo) {
      return Math.round(kilo * 2.20462 * 100) / 100;
    }

    return {
      template: '<input ng-change="kg_change()" ng-if="model.weight_units == \'kg\'" ng-model="model.weight" type="number"/>'+
        '<input ng-change="lbs_change()" ng-if="model.weight_units == \'lbs\'" ng-model="settings_state.weight_lbs" type="number"/>'+
        '<select ng-model="model.weight_units">'+
        '    <option value="lbs">lbs</option>'+
        '    <option value="kg">kg</option>'+
        '</select>',

      restrict: 'E',
      link: function postLink(scope, element, attrs) {

        scope.settings_state = {
          weight_lbs: kg_to_lb(scope.model.weight)
        }

        scope.kg_change = function() {
          scope.settings_state.weight_lbs = kg_to_lb(scope.model.weight);
          $rootScope.save_model();
        }

        scope.lbs_change = function() {
          scope.model.weight = Math.round(scope.settings_state.weight_lbs / 2.20462 * 100) / 100;
          $rootScope.save_model();
        }

        // Not sure why the ng-change wouldn't work on the select...
        scope.$watch('model.weight_units', function(new_val, old_val) {
          if (new_val === old_val) return;
          $rootScope.save_model();
        });

      }
    };
  });
