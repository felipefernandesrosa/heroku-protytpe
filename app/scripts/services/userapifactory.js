'use strict';

/**
 * @ngdoc service
 * @name zazcarPrototypeApp.userApiFactory
 * @description
 * # userApiFactory
 * Factory in the zazcarPrototypeApp.
 */
angular.module('zazcarPrototypeApp')
  .factory('userApiFactory', function ($http) {
    
    var token = "a9911eb5e0e74376acf0ab72f30eca31a113f2f3d39fb16037c6c30f19a8928c";
    
    return {
      getShots: function () {
        return $http.get("https://api.dribbble.com/v1/shots/?access_token="+token);
      },
      getShot: function (id) {
        return $http.get("https://api.dribbble.com/v1//shots/"+id+"/?access_token="+token);
      }
    };
  });
