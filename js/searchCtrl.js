(function () {
	var githubModule = angular.module("githubModule");
	githubModule.controller(
		"searchCtrl",
		['$scope', '$location','$routeParams',
			function ($scope, $location, $routeParams) {

				$scope.githubUSername = $routeParams.username;
				console.log($routeParams);
				$scope.search = function (githubUSername) {
					$location.path('/user/' + githubUSername)
				}

			}]);
} ());