'use strict';

angular.module('hydrationApp')
  .directive('liquidUnit', function ($rootScope) {
    return {
      template: '<a ng-click="set_unit(\'ml\')" ng-class="{\'ml\': \'selected\'}[model.liquid_units]" class="multi_choice button">250 ml</a>'+
				'<a ng-click="set_unit(\'oz\')" ng-class="{\'oz\': \'selected\'}[model.liquid_units]" class="multi_choice button">8 oz</a>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.set_unit = function(unit) {
          $rootScope.model.liquid_units = unit;
          $rootScope.save_model();
        }
      }
    };
  });
