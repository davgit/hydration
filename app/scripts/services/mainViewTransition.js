'use strict';

angular.module('hydrationApp')
  .service('MainViewTransition', function MainViewTransition($rootScope) {

  	var view_container = angular.element(document.querySelector('body > div[ng-view]')),
        transitions = {
          FADE : 'animate_fade',
          SLIDE_RIGHT : 'animate_slide_right',
          SLIDE_LEFT  : 'animate_slide_left',
          SLIDE_UP  : 'animate_slide_up'
        };

    var transition_classes = Object.keys(transitions).map(
                                function(d) { return transitions[d]; }
                             );

    $rootScope.view_container_classes = ['container'].concat(transition_classes[0]);

    return {
      transitions: transitions,
      setTransition: function(transition, callback) {
        var new_classes = [];
        for (var i=0; i<$rootScope.view_container_classes.length; i++) {
          // Only add back non transition classes
          if (transition_classes.indexOf($rootScope.view_container_classes[i]) === -1) {
            new_classes.push($rootScope.view_container_classes[i]);
          }
        }
        // Finally add the classes we want
        new_classes.push(transition);
        $rootScope.view_container_classes = new_classes;
      }
    }
  });
