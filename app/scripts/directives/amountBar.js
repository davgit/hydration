'use strict';

angular.module('hydrationApp')
  .directive('amountBar', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

       var svg = d3.select(element[0]);

        svg.append("rect")
          .attr("class", "fillBar")
          .attr("height", 200)
          .attr("width", 300)
      }
    };
  });
