'use strict';

angular.module('hydrationApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/', {
        templateUrl: 'views/blank.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
