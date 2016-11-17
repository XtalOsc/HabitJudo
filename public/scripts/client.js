console.log("in client.js");
var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(["$routeProvider", function($routeProvider){
  $routeProvider.
  when("/habit", {
    templateUrl: "/views/habit.html",
    controller: "habit"
  }).
  when("/levels", {
    templateUrl: "/views/levels.html",
    controller: "levels"
  }).
  otherwise({
    redirectTo: "/habit"
  });
}]);
