'use strict';

/**
 * @ngdoc function
 * @name zazcarPrototypeApp.controller:UserdetailCtrl
 * @description
 * # UserdetailCtrl
 * Controller of the zazcarPrototypeApp
 */
angular.module('zazcarPrototypeApp')
  .controller('userDetailCtrl', function ($scope, $routeParams,userApiFactory) {
    console.log($routeParams);
    userApiFactory.getShot($routeParams.id).then(function successCallback(response) {
      
      console.log(response.data);
      
      $scope.result = response.data;
      $scope.description = response.data.description;
      
    }, function errorCallback(response) {
      $scope.message = $response.data;
    });
  });
