'use strict';

describe('Service: MainViewTransition', function () {

  // load the service's module
  beforeEach(module('hydrationApp'));

  // instantiate service
  var MainViewTransition;
  beforeEach(inject(function (_MainViewTransition_) {
    MainViewTransition = _MainViewTransition_;
  }));

  it('should do something', function () {
    expect(!!MainViewTransition).toBe(true);
  });

});
