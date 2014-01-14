'use strict';

angular.module('hydrationApp', ['ngRoute', 'ngTouch'])
  .config(function ($routeProvider, $provide) {
    $provide.constant('tools', {
      date_format: function(d) {
                      return d3.time.format('%I:%M')(d).replace(/^[0]+/g,"");;
                    }
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/intro.html',
        controller: 'IntroCtrl'
      })
      .when('/water', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      })
  }).run(function($rootScope, waterRecord) {

    // Save Model
    $rootScope.save_model = function() {
      localStorage.setItem('model', JSON.stringify($rootScope.model));
    };

    // Initial loading of model from storage
    var local_save = localStorage.getItem('model');
    if (local_save === null) {
      // Initialize empty model
      $rootScope.model = {
        weight: 68.04, // 150 lbs
        weight_units: 'kg',

        liquid_units: null,

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
