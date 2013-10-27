'use strict';

describe('Directive: amountNumber', function () {

  // load the directive's module
  beforeEach(module('hydrationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<amount-number></amount-number>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the amountNumber directive');
  }));
});
