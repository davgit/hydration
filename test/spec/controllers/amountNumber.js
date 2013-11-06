'use strict';

describe('Controller: AmountDisplayCtrl', function () {

  // load the controller's module
  beforeEach(module('hydrationApp'));

  var AmountDisplayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AmountDisplayCtrl = $controller('AmountDisplayCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
