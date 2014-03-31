'use strict';

// Using : https://github.com/katzer/cordova-plugin-local-notifications

angular.module('hydrationApp')
  .service('reminders', function Reminders() {
    return {
      set_reminder: function(reminder_date) {
        // Kill all previous notifications, then add our new one
        window.plugin.notification.local.cancelAll();
        window.plugin.notification.local.add({
            date:       reminder_date,
            message:    'Friendly reminder to drink some water',
            title:      'Drink Water',
            autoCancel: true
        });
      }
    }
  });
