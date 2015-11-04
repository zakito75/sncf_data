var $ = require('jquery');
var _ = require('underscore');
var angular = require('angular');
var API = '' + '.ngrok.com';

var cl = function(something){
  return console.log(something);
};

angular.module('goosncf', [require('angular-resource') ,require('angular-route')])

.controller('DataShowCtrl', [ '$scope', '$routeParams', function($scope, $routeParams){
  $scope.hello = "bonjour c'est la data";
	var info = $routeParams;
	cl(info);
	
}])

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

.directive('dataPage', function(){
  return {
		 controller:'DataShowCtrl',
     templateUrl:'public/templates/data.html'
  };
})


.directive('footerPage', function(){
  return {
     templateUrl:'public/templates/footer.html'
  };
})



.config(['$routeProvider', function($routeProvider){
     $routeProvider


       .when('/' ,{
            templateUrl:'public/templates/home.html'
       })


       .when('/home' ,{
            templateUrl:'public/templates/home.html'
       })


       .when('/about' ,{
            templateUrl:'public/templates/about.html'
       })

       .when('/search' ,{
            templateUrl:'public/templates/search.html'
       })

			 .when('/search/:id' ,{
            templateUrl:'public/templates/data.html'
       })

			 .when('/404' ,{
            templateUrl:'public/templates/404.html'
       })
			 
			 .otherwise({ redirectTo:'/404' });
			 


}]);
