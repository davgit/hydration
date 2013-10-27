'use strict';

angular.module('hydrationApp')
  .directive('axes', function () {
    return {
      // template: '<div class="mainScreen"><svg></svg></div>',
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var height = element[0].offsetHeight;
        var width = element[0].offsetWidth;

        var svg = d3.select(element[0]);

        var left_scale = d3.scale.linear()
          .domain([0, 100])
          .range([height, 0]);

        var leftAxis = d3.svg.axis()
          .scale(left_scale)
          .tickPadding(5)
          .tickValues(left_scale.ticks().slice(1, -1))
          .outerTickSize(0)
          .orient("right");

        var left_bar = svg.append("g")
          .attr("class", "left axis")
          .call(leftAxis);

        var start_date = new Date(2013, 9, 27, 7);
        var end_date = new Date(2013, 9, 27, 11);

        var right_scale = d3.time.scale()
          .domain([start_date, end_date])
          .range([height, 0])

        var rightAxis = d3.svg.axis()
          .scale(right_scale)
          .tickPadding(5)
          .tickValues(right_scale.ticks().slice(1, -1))
          .outerTickSize(0)
          .orient("left")

        var right_bar = svg.append("g")
          .attr("transform", "translate("+width+", 0)")
          .attr("class", "right axis")
          .call(rightAxis)

      }
    };
  });
