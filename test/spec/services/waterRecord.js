'use strict';

describe('Service: waterRecord', function () {

  // load the service's module
  beforeEach(module('hydrationApp'));

  // instantiate service
  var waterRecord;
  beforeEach(inject(function (_waterRecord_) {
    waterRecord = _waterRecord_;
  }));

  it('should do something', function () {
    expect(!!waterRecord).toBe(true);
  });

});
