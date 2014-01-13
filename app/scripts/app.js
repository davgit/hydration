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
  }).run(function($rootScope) {

    $rootScope.model = {
      weight: 150,
      weight_units: 'lbs',

      liquid_units: null,


    };
  });
