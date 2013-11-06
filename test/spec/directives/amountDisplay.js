'use strict';

describe('Directive: amountDisplay', function () {

  // load the directive's module
  beforeEach(module('hydrationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amount-display></amount-display>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amountDisplay directive');
  }));
});
