'use strict';

angular.module('hydrationApp')
  .service('waterRecord', function waterRecord() {

  	var today_amount = 0;

  	return {
  		today_amount: function() {
  			return today_amount;
  		},

  		add_amount: function(amount) {
  			today_amount = Math.abs((today_amount + amount)%110);
  		}
  	}
  });
