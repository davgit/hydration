'use strict';

angular.module('hydrationApp')
  .controller('IntroCtrl', function ($scope) {
	$scope.model = {
		weight: 0
	};

	$scope.$watch('weight_input', function(new_val) {
		if (new_val === undefined || new_val == NaN) {
			return;
		} else {
			$scope.model.weight = new_val;
		}
	});
  });
