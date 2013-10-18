'use strict';

angular.module('hydrationApp')
  .directive('scale', function () {

    // This is really simple
    var calc_factors = function(num) {
      var to_return = [];
      for (var i=0; i<num; i++) {
        if (num % i === 0) {
          to_return.push(i);
        }
      }
      return to_return;
    }

    // Given an array of numbers find the number closes to the target
    var find_closest = function(num_list, target) {
      if (num_list.length < 1) {
        return null;
      }
      var winner = num_list[0];
      for (var i=1; i < num_list.length; i++) {
        if ( Math.abs(num_list[i] - target) < Math.abs(winner - target) ) {
          winner = num_list[i];
        }
      }
      return winner;
    }


    return {
      scope: {
        start: '=',
        end: '='
      },
      templateUrl: 'views/scale.html',
      restrict: 'ACE',
      link: function postLink(scope, element, attrs) {
        var span = scope.end - scope.start;

        // Divide into whole factors, closes to our desired amounts
        var decrement_amount = find_closest(calc_factors(span), 9);

        scope.item_height = 100 / (span / decrement_amount - 1);

        scope.items = [];
        while (span > decrement_amount) {
          span -= decrement_amount;
          scope.items.push(span);
        }
      }
    };
  });
