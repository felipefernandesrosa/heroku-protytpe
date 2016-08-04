'use strict';

/**
 * @ngdoc function
 * @name zazcarPrototypeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zazcarPrototypeApp
 */
angular.module('zazcarPrototypeApp')
  .controller('MainCtrl', function ($scope,userApiFactory) {
    
    userApiFactory.getShots().then(function successCallback(response) {
      $scope.result = response.data;
    }, function errorCallback(response) {
      
    });
    
  });
