(function () {
	var githubModule = angular.module("githubModule");
	githubModule.controller(
		"githubCtrl",
		['$scope', '$location', '$anchorScroll', 'github',
			function ($scope, $location, $anchorScroll, github) {
				$scope.githubUSername = "";

				var notFoundError = function (dets) {
					$scope.error = "Could not find the requested data";
				}

				$scope.search = function (githubUSername) {
					$scope.error = "";
					$scope.user = null;
					$scope.repos = null;
					console.log('searching for ' + githubUSername + '...');
					//search user
					github.getUser(githubUSername).then(function (data) {
						$scope.user = data;
						console.log(data);
						github.getRepos($scope.user.repos_url).then(function (data) {
							$scope.repos = data;
							$location.hash('userRepos');
							$anchorScroll();
						}, notFoundError);
					}, notFoundError);
				}
			}]);
}());