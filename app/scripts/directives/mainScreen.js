'use strict';

angular.module('hydrationApp')
  .directive('mainScreen', function () {
    return {
      template: '<div></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.text('d3 graphic will go here');
      }
    };
  });
