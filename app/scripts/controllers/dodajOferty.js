'use strict';

ofertyApp.controller('DodajOfertyCtrl', function($scope) {
  var save = function () {
    localStorage.setItem('ofertList', JSON.stringify($scope.ofertList));
  }

  $scope.add = function () {
    $scope.ofertList.push($scope.ofert);
    save();
    $scope.ofert = {};
  };

  $scope.delLine = function (index) {
    $scope.ofertList.splice(index, 1);
    save();
  };

  var stored = localStorage.getItem('ofertList');
  if (stored) {
    $scope.ofertList = JSON.parse(stored);
  }
  else {
    $scope.ofertList = [];
  }
});
