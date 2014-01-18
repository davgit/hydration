'use strict';

describe('Directive: liquidUnit', function () {

  // load the directive's module
  beforeEach(module('hydrationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<liquid-unit></liquid-unit>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the liquidUnit directive');
  }));
});
