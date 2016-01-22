(function () {
	var userModule = angular.module("userModule", []);
	//Dummy users collection
	var usersCollection = [
		{ name: "Walter White", age: 54, gender: "male" },
		{ name: "Olivia Grey", age: 23, gender: "female" },
		{ name: "Joe Black", age: 36, gender: "male" }
	];
	userModule.controller('usersCtrl', ['$scope', function ($scope) {
		$scope.users = usersCollection;

	}]);

}());