var $ = require('jquery');
var _ = require('underscore');
var angular = require('angular');

angular.module('goosncf', [require('angular-resource') ,require('angular-route')])

.directive('searchInput', function(){
  return {
     templateUrl:'public/templates/searchform.html'
  };
})

.directive('headerMenu', function(){
  return {
     templateUrl:'public/templates/headermenu.html'
  };
})

.directive('banniereSite', function(){
  return {
     templateUrl:'public/templates/bannieresite.html'
  };
})

.directive('footerPage', function(){
  return {
     templateUrl:'public/templates/footer.html'
  };
})



.config(['$routeProvider', function($routeProvider){
     $routeProvider
       .when('/about' ,{
            templateUrl:'public/templates/about.html'
       })
       .when('/search' ,{
            templateUrl:'public/templates/search.html'
       });

}]);
