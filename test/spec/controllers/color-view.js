'use strict';

describe('Controller: ColorViewCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ColorViewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ColorViewCtrl = $controller('ColorViewCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ColorViewCtrl.awesomeThings.length).toBe(3);
  });
});
