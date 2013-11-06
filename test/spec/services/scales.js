'use strict';

describe('Service: scales', function () {

  // load the service's module
  beforeEach(module('hydrationApp'));

  // instantiate service
  var scales;
  beforeEach(inject(function (_scales_) {
    scales = _scales_;
  }));

  it('should do something', function () {
    expect(!!scales).toBe(true);
  });

});
