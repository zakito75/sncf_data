var myApp = angular.module('myApp', []);
myApp.value('clientId', 'a12345654321x');

myApp.controller('ApiController', ['clientId', function ApiController(clientId) {
  this.clientId = clientId;
}]);
