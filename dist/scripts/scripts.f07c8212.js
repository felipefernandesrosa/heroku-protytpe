"use strict";angular.module("zazcarPrototypeApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("zazcarPrototypeApp").controller("MainCtrl",["$scope","userApiFactory",function(a,b){b.getShots().then(function(b){console.log(b),a.result=b.data},function(a){console.log(a)})}]),angular.module("zazcarPrototypeApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("zazcarPrototypeApp").factory("userApiFactory",["$http",function(a){var b="a9911eb5e0e74376acf0ab72f30eca31a113f2f3d39fb16037c6c30f19a8928c";return{getShots:function(){return a.get("https://api.dribbble.com/v1/shots/?access_token="+b)}}}]),angular.module("zazcarPrototypeApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <div ng-repeat="result in result"> <div class="item {{result.id}}"> <img src="{{result.images.normal}}"> <p>{{result.title}}</p> <p>{{result.views_count}}</p> </div> </div> </div>')}]);