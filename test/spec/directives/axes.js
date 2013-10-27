'use strict';

describe('Directive: axes', function () {

  // load the directive's module
  beforeEach(module('hydrationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<main-screen></main-screen>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the axes directive');
  }));
});
