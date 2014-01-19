'use strict';

angular.module('hydrationApp')
  .directive('amountDisplay', function ($rootScope, $filter, scales, tools, waterRecord) {

    var display_styles = {
      percentage_display: function(amount) {
        return Math.floor(amount) + "%";
      },
      time_display: function(amount) {
        return tools.date_format(scales.time_scale.invert(scales.linear_scale(amount)));
      },
      liquid_display: function(amount) {

        var water_target = waterRecord.water_target_ml(),
            water_current = water_target * amount / 100,
            num_filter = $filter('number');

        if ($rootScope.model.liquid_units === 'oz') {
          water_target = water_target * 0.033814;
          water_current = water_current * 0.033814;
        }

        return num_filter(water_current, 0) +
               ' / ' +
               num_filter(water_target, 0) +
               ' ' +
               $rootScope.model.liquid_units;
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
          .data([scope.today_amount_percentage()])
        .enter().append("text")
          .attr("class", function() {
            var txt_clss = "amountDisplay";
            if (scope.current_display == 'liquid_display') {
              txt_clss += " liquid_txt";
            }
            return txt_clss;
          })
          .attr("x", width/2)
          .attr("y", height/2)
          .attr("text-anchor", "middle");

        scope.$watch("current_display", function() {
          svg_g.selectAll(".amountDisplay")
            .text(display_styles[scope.current_display](scope.today_amount_percentage()))
            .attr("class", function() {
              var txt_clss = "amountDisplay";
              if (scope.current_display == 'liquid_display') {
                txt_clss += " liquid_txt";
              }
              return txt_clss;
            });
        });

        scope.$watch("today_amount_percentage()", function(new_val, old_val) {
          svg_g.selectAll(".amountDisplay")
            .data([scope.today_amount_percentage()])
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
