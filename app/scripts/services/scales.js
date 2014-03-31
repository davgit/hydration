'use strict';

angular.module('hydrationApp')
  .service('scales', function scales(waterRecord) {
    var height = document.getElementsByTagName("svg")[0].offsetHeight;

    var time_scale = d3.time.scale()
          .domain([waterRecord.WORKDAY.START, waterRecord.WORKDAY.END])
          .range([height, 0]);

    var linear_scale = d3.scale.linear()
          .domain([0, 100])
          .range([height, 0]);

    return {
      time_scale : time_scale,
      linear_scale : linear_scale
    }

  });
