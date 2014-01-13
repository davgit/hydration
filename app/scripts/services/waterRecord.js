'use strict';

angular.module('hydrationApp')
  .service('waterRecord', function waterRecord() {

    var today_amount_percentage = 20;

    // current weight / 2 = oz to drink per day
    // 206lb == 103 oz
    // 1oz == 29.5735ml

    //50% weight in oz
    //70% weight in oz :: high range




    return {
      today_amount_percentage: function() {
        return today_amount_percentage;
      },

      add_amount: function(amount) {
        today_amount_percentage = Math.abs((today_amount_percentage + amount)%110);
      }
    }
  });
