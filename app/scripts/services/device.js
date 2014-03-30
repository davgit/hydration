'use strict';

angular.module('hydrationApp')
  .service('device', function Device() {

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
      document.addEventListener("resume", onResume, false);
      document.addEventListener("pause", onPause, false);
    }

    function onResume() {
      console.log("resume");
    }
    function onPause() {
      console.log("pause");
      // scope.$apply to let Angular land take over again
    }

  });
