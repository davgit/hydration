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

    // Initialize the model
    $rootScope.model = {
      weight: 95.2544, // 210 lbs
      weight_units: 'kg',

      liquid_units: null,

      water_dates: [
        {
          date: new Date('2014/1/12'),
          amount_ml: 1000
        }
      ]
    };

    waterRecord.init();
  });
