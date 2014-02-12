'use strict';

angular.module('hydrationApp')
  .directive('amountBar', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var height = document.getElementsByTagName("svg")[0].offsetHeight;
        var width = document.getElementsByTagName("svg")[0].offsetWidth;

        var svg_g = d3.select(element[0]);

        var scale = d3.scale.linear()
          .domain([0, 100])
          .range([height, 0]);

        // Today's percentage, but with a min
        var today_buffered_percentage = function() {
          return Math.max(1, scope.today_amount_percentage());
        }

        svg_g.selectAll(".amountBar")
          .data([today_buffered_percentage()])
        .enter().append("rect")
          .attr("class", "amountBar")
          .attr("x", 0)
          .attr("width", width)
          .attr("y", function(d) { return scale(d); })
          .attr("height", function(d) { return height - scale(d); });

        scope.$watch("today_amount_percentage()", function() {
          svg_g.selectAll(".amountBar")
            .data([today_buffered_percentage()])
            .transition()
            .ease("quad-in-out")
            .duration(700)
            .attr("y", function(d) { return scale(d); })
            .attr("height", function(d) { return height - scale(d); });
        });
      }
    };
  });
