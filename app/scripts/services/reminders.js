'use strict';

angular.module('hydrationApp')
  .service('reminders', function Reminders() {
    return {
      set_reminder: function(reminder_date) {
        console.log("Set Reminder");
        console.log(reminder_date);
      }
    }
  });
