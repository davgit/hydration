'use strict';

angular.module('hydrationApp')
  .service('Scales', function Scales() {
    var height = document.getElementsByTagName("svg")[0].offsetHeight;

    var start_date = new Date(2013, 9, 27, 7);
    var end_date = new Date(2013, 9, 27, 19);

    var time_scale = d3.time.scale()
          .domain([start_date, end_date])
          .range([height, 0]);

    var linear_scale = d3.scale.linear()
          .domain([0, 100])
          .range([height, 0]);

    return {
      time_scale : time_scale,
      linear_scale : linear_scale
    }

  });
