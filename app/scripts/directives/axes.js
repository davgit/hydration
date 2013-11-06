'use strict';

angular.module('hydrationApp')
  .directive('axes', function (Scales) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var width = document.getElementsByTagName("svg")[0].offsetWidth;

        var svg_g = d3.select(element[0]);

        var leftAxis = d3.svg.axis()
          .scale(Scales.linear_scale)
          .tickPadding(5)
          .tickValues(Scales.linear_scale.ticks().slice(1, -1))
          .outerTickSize(0)
          .orient("right");

        var left_bar = svg_g.append("g")
          .attr("class", "left axis")
          .call(leftAxis);

        var rightAxis = d3.svg.axis()
          .scale(Scales.time_scale)
          .tickPadding(5)
          .tickValues(Scales.time_scale.ticks().slice(1, -1))
          .tickFormat(function(d) {
            return d3.time.format('%I:%M')(d).replace(/^[0]+/g,"");;
          })
          .outerTickSize(0)
          .orient("left")

        var right_bar = svg_g.append("g")
          .attr("transform", "translate("+width+", 0)")
          .attr("class", "right axis")
          .call(rightAxis)

      }
    };
  });
