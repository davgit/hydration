'use strict';

describe('Controller: IntroCtrl', function () {

  // load the controller's module
  beforeEach(module('hydrationApp'));

  var IntroCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IntroCtrl = $controller('IntroCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
