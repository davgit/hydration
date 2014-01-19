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
            num_filter = $filter('number'),
            display_unit = $rootScope.model.liquid_units;

        if (display_unit === 'oz') {
          water_target = num_filter(water_target * 0.033814, 0);
          water_current = num_filter(water_current * 0.033814, 0);
        } else if(display_unit === 'ml') {
          display_unit = 'L';
          water_target = num_filter(water_target / 1000, 2);
          water_current = num_filter(water_current / 1000, 2);

        }

        return water_current + '/' + water_target + ' ' + display_unit;
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
            return "amountDisplay" + (scope.model.current_display === 'liquid_display' ? " liquid_txt" : '');
          })
          .attr("x", width/2)
          .attr("y", height/2)
          .attr("text-anchor", "middle");

        scope.$watch("model.current_display", function() {
          svg_g.selectAll(".amountDisplay")
            .text(display_styles[scope.model.current_display](scope.today_amount_percentage()))
            .attr("class", function() {
              return "amountDisplay" + (scope.model.current_display === 'liquid_display' ? " liquid_txt" : '');
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
                this.textContent = display_styles[scope.model.current_display](i(t));
              };
            });
        });
      }
    };
  });
