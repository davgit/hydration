'use strict';

angular.module('hydrationApp')
  .controller('AmountDisplayCtrl', function ($scope) {

    var display_styles = ['percentage_display', 'time_display'];

    $scope.current_display = 'percentage_display';

    $scope.toggle_display = function() {
      var next_index = (display_styles.indexOf($scope.current_display) + 1) % display_styles.length;
      $scope.current_display = display_styles[next_index];
    }
  });
