'use strict';

angular.module('hydrationApp')
  .directive('amountNumber', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var height = document.getElementsByTagName("svg")[0].offsetHeight;
        var width = document.getElementsByTagName("svg")[0].offsetWidth;

        var svg_g = d3.select(element[0]);

        svg_g.selectAll(".amountNumber")
          .data([scope.amount])
        .enter().append("text")
          .attr("class", "amountNumber")
          .attr("x", width/2)
          .attr("y", height/2)
          .attr("text-anchor", "middle")
          .text(scope.amount);


        scope.$watch("amount", function(new_val, old_val) {
          svg_g.selectAll(".amountNumber")
            .data([scope.amount])
            .transition()
            .ease("quad-in-out")
            .tween("text", function() {
              var i = d3.interpolate(old_val, new_val);
              return function(t) {
                this.textContent = Math.floor(i(t)) + "%";
              };
            });
        });
      }
    };
  });
