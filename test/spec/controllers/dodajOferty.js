'use strict';

describe('Controller: DodajOfertyCtrl', function() {

  // load the controller's module
  beforeEach(module('ofertyApp'));

  var DodajOfertyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    DodajOfertyCtrl = $controller('DodajOfertyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
