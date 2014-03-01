'use strict';

angular.module('hydrationApp')
  .controller('IntroCtrl', function ($scope, $location) {

    $scope.settings_view = $location.path().indexOf('settings') !== -1;

    $scope.show_question = 'weight';

    $scope.change_question = function(new_state) {
      $scope.show_question = new_state;
    };

    $scope.back_button = function() {
      $location.path('/');
    }
    $scope.start_button = function() {
      $location.path('/');
    }
  });