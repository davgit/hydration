'use strict';

angular.module('hydrationApp')
  .service('waterRecord', function waterRecord($rootScope, reminders) {

    var today = new Date(),
        today_amount_percentage = 0,
        today_data = {};

    // Set amounts in ml
    var AMOUNTS = {
      'LARGE_GLASS' : 350,
      'SMALL_GLASS' : 200
    };

    var WORKDAY = {
      START: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 7),
      END: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 19)
    };



    // current weight / 2 = oz to drink per day
    // 206lb == 103 oz
    // 1oz == 29.5735ml

    //50% weight in oz
    //70% weight in oz :: high range

    // True if two dates are equal (not time)
    var equal_date = function(d1, d2) {
      return d1.getDate() === d2.getDate() &&
             d1.getMonth() === d2.getMonth() &&
             d1.getFullYear() === d2.getFullYear();
    }

    var water_target_ml = function() {
      // Weight in lbs / 2 ... in oz
      // 206lb == 103 oz
      return $rootScope.model.weight * 2.20462 / 2 * 29.5735;
    }

    var update_percentage_water = function() {
      today_amount_percentage = Math.min(today_data.amount_ml / water_target_ml() * 100, 100);
    }

    var reminder_extra = 60*60*1000; // 1 hour - Amount past when water due
    var update_reminder = function() {
      var today = new Date();

      // Done for today?
      if (today_amount_percentage === 100) {
        // Remind tomorrow morning
        reminders.set_reminder(new Date(
            today.getFullYear(),
            today.getMonth(),
            today.getDate() + 1,
            WORKDAY.START.getHours() + 1
          ));
      } else {
        reminders.set_reminder(new Date(
          // When overdue to drink, or now; whichever is later; + extra_time
          Math.max(
            WORKDAY.START.getTime()+((WORKDAY.END - WORKDAY.START)*today_amount_percentage/100)
            ,
            new Date().getTime()
          ) + reminder_extra
        ));
      }
    }

    return {
      AMOUNTS: AMOUNTS,
      WORKDAY: WORKDAY,

      init: function() { // root
        var today = new Date();

        // See if we have data for today, if not create it
        today_data = $rootScope.model.water_dates.
              filter(function(d) {
                return equal_date(d.date, today);
              });
        if (today_data.length > 0) {
          today_data = today_data[0];
        } else {
          today_data = {
            date: new Date(today.getFullYear(), today.getMonth(), today.getDate()),
            amount_ml: 0
          };
          $rootScope.model.water_dates.push(today_data);
        }
        update_percentage_water();
      },

      today_amount_percentage: function() {
        return today_amount_percentage;
      },

      water_target_ml: water_target_ml,

      update_percentage_water: update_percentage_water,

      add_amount: function(amount) {
        today_data.amount_ml += amount;
        update_percentage_water();

        $rootScope.save_model();
        update_reminder();
      }
    }
  });
