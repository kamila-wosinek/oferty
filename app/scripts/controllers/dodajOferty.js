'use strict';

ofertyApp.controller('DodajOfertyCtrl', function($scope) {
  $scope.add = function () {
    $scope.ofertList.push($scope.ofert);
    $scope.ofert = {};
  };

  $scope.ofertList = [
    {"name":"Test1","price":"Test","link":"Test","status":"Test"}
  ];
});
