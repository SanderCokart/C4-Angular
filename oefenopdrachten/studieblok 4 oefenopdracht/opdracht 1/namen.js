let myApp = angular.module('myApp', []);

myApp.controller('myCtrl1', ($scope) => {
	$scope.firstName = 'John';
	$scope.lastName = 'Doe';
});

myApp.controller('myCtrl2', ($scope) => {
	$scope.firstName = 'Sander';
	$scope.lastName = 'Cokart';
});