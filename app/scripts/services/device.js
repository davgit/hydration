'use strict';

angular.module('hydrationApp')
  .service('device', function Device(waterRecord) {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      document.addEventListener("resume", onResume, false);
      //document.addEventListener("pause", onPause, false);
    }

    function onResume() {
      // Could be woken up on a different day.
      waterRecord.init();
      $rootScope.$apply();
    }
    function onPause() {
      // scope.$apply to let Angular land take over again
    }

  });
