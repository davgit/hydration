'use strict';

angular.module('hydrationApp')
  .controller('IntroCtrl', function ($scope) {

	$scope.show_question = 'weight';

	$scope.change_question = function(new_state) {
		$scope.show_question = new_state;
	};

  });
