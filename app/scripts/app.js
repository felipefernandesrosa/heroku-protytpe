'use strict';

/**
 * @ngdoc overview
 * @name zazcarPrototypeApp
 * @description
 * # zazcarPrototypeApp
 *
 * Main module of the application.
 */
angular
  .module('zazcarPrototypeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/user/detail/:id', {
        templateUrl: 'views/userdetail.html',
        controller: 'userDetailCtrl',
        controllerAs: 'userDetail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
