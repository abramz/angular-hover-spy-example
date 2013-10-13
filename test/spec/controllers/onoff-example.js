'use strict';

describe('Controller: OnoffExampleCtrl', function () {

  // load the controller's module
  beforeEach(module('angularHoverSpyExampleApp'));

  var OnoffExampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OnoffExampleCtrl = $controller('OnoffExampleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
