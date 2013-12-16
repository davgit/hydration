'use strict';

angular.module('hydrationApp')
  .controller('IntroCtrl', function ($scope) {

	$scope.model = {
		show_question: 'weight',
		weight: 0,
		units: null
	};

	$scope.start_water = function() {
		console.log("WATER!");
	};

  });
