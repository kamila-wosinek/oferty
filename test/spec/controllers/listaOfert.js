'use strict';

describe('Controller: ListaOfertCtrl', function() {

  // load the controller's module
  beforeEach(module('ofertyApp'));

  var ListaOfertCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    ListaOfertCtrl = $controller('ListaOfertCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
