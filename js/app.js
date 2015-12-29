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

	var githubModule = angular.module("githubModule", ['datatables']);
	githubModule.controller("githubCtrl", ['$scope', '$http', function ($scope, $http) {
		var githubUSername = "";
		$scope.error = "";
		var notFoundError = function (dets) {
			$scope.error = "Could not find the requested data";
		}

		$scope.search = function (githubUSername) {
			console.log('searching...');
			$http.get('https://api.github.com/users/' + githubUSername).
				then(function (response) {
					$scope.user = response.data;
				}, notFoundError);
			$http.get('https://api.github.com/users/' + githubUSername + '/repos').
				then(function (response) {
					$scope.repos = response.data;
				}, notFoundError);
		}
	}]);
})()