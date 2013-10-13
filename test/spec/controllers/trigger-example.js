'use strict';

describe('Controller: TriggerExampleCtrl', function () {

  // load the controller's module
  beforeEach(module('angularHoverSpyExampleApp'));

  var TriggerExampleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TriggerExampleCtrl = $controller('TriggerExampleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
