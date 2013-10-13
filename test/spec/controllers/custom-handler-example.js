'use strict';

describe('Controller: CustomHandlerExampleCtrl', function () {

  // load the controller's module
  beforeEach(module('angularHoverSpyExampleApp'));

  var CustomHandlerExampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CustomHandlerExampleCtrl = $controller('CustomHandlerExampleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
