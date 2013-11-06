'use strict';

angular.module('hydrationApp')
  .directive('amountBar', function () {
    return {
      restrict: 'A',
      scope: {
        amount: '='
      },
      link: function postLink(scope, element, attrs) {
        var height = document.getElementsByTagName("svg")[0].offsetHeight;
        var width = document.getElementsByTagName("svg")[0].offsetWidth;

        var svg_g = d3.select(element[0]);

        var scale = d3.scale.linear()
          .domain([0, 100])
          .range([height, 0]);

        svg_g.selectAll(".amountBar")
          .data([scope.amount])
        .enter().append("rect")
          .attr("class", "amountBar")
          .attr("x", 0)
          .attr("width", width)
          .attr("y", function(d) { return scale(d); })
          .attr("height", function(d) { return height - scale(d); });

        scope.$watch("amount", function() {
          svg_g.selectAll(".amountBar")
            .data([scope.amount])
            .transition()
            .ease("quad-in-out")
            .duration(700)
            .attr("y", function(d) { return scale(d); })
            .attr("height", function(d) { return height - scale(d); });
        });
      }
    };
  });
