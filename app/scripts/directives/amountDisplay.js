'use strict';

angular.module('hydrationApp')
  .directive('amountDisplay', function (scales, tools) {

    var display_styles = {
      percentage_display: function(amount) {
        return Math.floor(amount) + "%";
      },
      time_display: function(amount) {
        return tools.date_format(scales.time_scale.invert(scales.linear_scale(amount)));
      }
    };

    return {
      restrict: 'A',
      controller: 'AmountDisplayCtrl',
      link: function postLink(scope, element, attrs) {
        var height = document.getElementsByTagName("svg")[0].offsetHeight;
        var width = document.getElementsByTagName("svg")[0].offsetWidth;

        var svg_g = d3.select(element[0]);

        svg_g.selectAll(".amountDisplay")
          .data([scope.today_amount()])
        .enter().append("text")
          .attr("class", "amountDisplay")
          .attr("x", width/2)
          .attr("y", height/2)
          .attr("text-anchor", "middle");

        scope.$watch("current_display", function() {
          svg_g.selectAll(".amountDisplay")
            .text(display_styles[scope.current_display](scope.today_amount()));
        });

        scope.$watch("today_amount()", function(new_val, old_val) {
          svg_g.selectAll(".amountDisplay")
            .data([scope.today_amount()])
            .transition()
            .ease("quad-in-out")
            .tween("text", function() {
              var i = d3.interpolate(old_val, new_val);
              return function(t) {
                this.textContent = display_styles[scope.current_display](i(t));
              };
            });
        });
      }
    };
  });
