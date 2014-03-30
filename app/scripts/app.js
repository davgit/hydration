'use strict';

angular.module('hydrationApp', ['ngAnimate', 'ngRoute', 'ngTouch'])
  .config(function ($routeProvider, $provide) {
    $provide.constant('tools', {
      date_format: function(d) {
                      return d3.time.format('%I:%M')(d).replace(/^[0]+/g,"");;
                    }
    });

    $routeProvider
      .when('/intro', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl'
      })
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }).run(function($location, $rootScope, waterRecord, device) {
    // Device used as dependency to set up device specific things

    // Save Model
    $rootScope.save_model = function() {
      localStorage.setItem('model', JSON.stringify($rootScope.model));
      waterRecord.update_percentage_water();
    };

    // Initial loading of model from storage
    var local_save = localStorage.getItem('model');
    if (local_save === null) {
      // First time app is starting...
      $location.path('/intro');

      // Initialize empty model
      $rootScope.model = {
        weight: 68.04, // 150 lbs - Most math done in metric

        weight_units: 'lbs', // Most users 'merican so imperial it is
        liquid_units: 'oz',

        water_dates: [
          {
            date: new Date('2014/1/12'),
            amount_ml: 1000
          }
        ]
      }
    } else {
      $rootScope.model = JSON.parse(local_save);
      angular.forEach($rootScope.model.water_dates, function(wd){
        wd.date = new Date(wd.date);
      });
    }

    waterRecord.init();
  });
