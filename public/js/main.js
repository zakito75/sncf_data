var $ = require('jquery');
var _ = require('underscore');
var angular = require('angular');

var API = 'https://2b60c503.ngrok.com';
var data = null;

var cl = function(something){
  return console.log(something);
};

angular.module('goosncf', [
				require('angular-resource') ,
				require('angular-route')
])

.controller('DataShowCtrl', [ '$scope', '$routeParams', '$http', function($scope, $routeParams, $http){
  $scope.hello = "bonjour c'est la data";

	// Requete Serveur en get ----
	$http.get(API+'/q='+ $routeParams.terms +'/type=' +  $routeParams.options)
	.then(function(response){
		$scope.info = response.data ;
	});
	
	// ---- Fin request serveur

	
	
	
}])

.controller('DataSearchCtrl', [ '$scope', '$location', function($scope, $location){
  $scope.searchdata = function(data){
    $location.path('/data/'+ data.terms + '/' + data.options);
	};

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


.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider){
     $routeProvider


       .when('/' ,{
            templateUrl:'public/templates/home.html',
						cache:true
       })


       .when('/home' ,{
            templateUrl:'public/templates/home.html',
						cache:true
       })


       .when('/about' ,{
            templateUrl:'public/templates/about.html',
						cache:true
       })

       .when('/search' ,{
            templateUrl:'public/templates/search.html'
       })

			 .when('/data/:terms/:option' ,{
            templateUrl:'public/templates/data.html'
       })

			 .when('/404' ,{
            templateUrl:'public/templates/404.html'
       })
			 
			 .otherwise({ redirectTo:'/404' });

   $locationProvider.html5Mode(true);
	 $httpProvider.defaults.useXDomain = true;
   delete $httpProvider.defaults.headers.common['X-Requested-With'];

}]);
