'use strict';

angular.module('hydrationApp')
  .directive('axes', function (scales, tools) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var width = document.getElementsByTagName("svg")[0].offsetWidth;

        var svg_g = d3.select(element[0]);

        var leftAxis = d3.svg.axis()
          .scale(scales.linear_scale)
          .tickPadding(5)
          .tickValues(scales.linear_scale.ticks().slice(1, -1))
          .outerTickSize(0)
          .orient("right");

        var left_bar = svg_g.append("g")
          .attr("class", "left axis")
          .call(leftAxis);

        var rightAxis = d3.svg.axis()
          .scale(scales.time_scale)
          .tickPadding(5)
          .tickValues(scales.time_scale.ticks().slice(1, -1))
          .tickFormat(tools.date_format)
          .outerTickSize(0)
          .orient("left")

        var right_bar = svg_g.append("g")
          .attr("transform", "translate("+width+", 0)")
          .attr("class", "right axis")
          .call(rightAxis)

      }
    };
  });
