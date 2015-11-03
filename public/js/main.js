var $ = require('jquery');
var _ = require('underscore');
var angular = require('angular');

angular.module('goosncf', [require('angular-resource') ,require('angular-route')])

.config(['$routeProvider', function($routeProvider){
     $routeProvider
       .when('/about' ,{
            templateUrl:'public/templates/about.html'
       });
}]);
