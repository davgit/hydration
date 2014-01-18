'use strict';

angular.module('hydrationApp')
  .directive('liquidUnit', function ($rootScope) {
    return {
      template: '<button ng-click="set_unit(\'ml\')" ng-class="{\'ml\': \'selected\'}[model.liquid_units]" class="multi_choice">250 ml</button>'+
				'<button ng-click="set_unit(\'oz\')" ng-class="{\'oz\': \'selected\'}[model.liquid_units]" class="multi_choice">8 oz</button>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.set_unit = function(unit) {
          $rootScope.model.liquid_units = unit;
          $rootScope.save_model();
        }
      }
    };
  });
