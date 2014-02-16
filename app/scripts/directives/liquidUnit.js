'use strict';

angular.module('hydrationApp')
  .directive('liquidUnit', function ($rootScope) {
    return {
      template: '<div class="segmentSelect">'+
      '  <a ng-click="set_unit(\'ml\')" ng-class="{\'ml\': \'segmentActive\'}[model.liquid_units]">250 ml</a>'+
			'  <a ng-click="set_unit(\'oz\')" ng-class="{\'oz\': \'segmentActive\'}[model.liquid_units]">8 oz</a>'+
      '</div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.set_unit = function(unit) {
          $rootScope.model.liquid_units = unit;
          $rootScope.save_model();
        }
      }
    };
  });
