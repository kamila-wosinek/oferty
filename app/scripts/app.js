'use strict';

var ofertyApp = angular.module('ofertyApp', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/dodajOferty', {
        templateUrl: 'views/dodajOferty.html',
        controller: 'DodajOfertyCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
