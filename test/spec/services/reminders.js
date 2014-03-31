'use strict';

describe('Service: Reminders', function () {

  // load the service's module
  beforeEach(module('hydrationApp'));

  // instantiate service
  var Reminders;
  beforeEach(inject(function (_Reminders_) {
    Reminders = _Reminders_;
  }));

  it('should do something', function () {
    expect(!!Reminders).toBe(true);
  });

});
