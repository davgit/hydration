'use strict';

describe('Directive: scale', function () {

  // load the directive's module
  beforeEach(angular.module('hydrationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<scale></scale>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the scale directive');
  }));
});
