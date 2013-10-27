'use strict';

angular.module('hydrationApp')
  .directive('amountBar', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var height = element[0].offsetHeight;
        var width = element[0].offsetWidth;

        var svg = d3.select(element[0]);

        var data = [20];

        var scale = d3.scale.linear()
          .domain([0, 100])
          .range([height, 0]);

        svg.selectAll(".amountBar")
          .data(data)
        .enter().append("rect")
          .attr("class", "amountBar")
          .attr("x", 0)
          .attr("width", width)
          .attr("y", function(d) { return scale(d); })
          .attr("height", function(d) { return height - scale(d); });


        scope.$watch("amount", function() {
          svg.selectAll(".amountBar")
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
