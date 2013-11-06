'use strict';

angular.module('hydrationApp', ['ngRoute'])
  .config(function ($routeProvider, $provide) {
    $provide.constant('tools', {
      date_format: function(d) {
                      return d3.time.format('%I:%M')(d).replace(/^[0]+/g,"");;
                    }
    });

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
