(function () {
    var githubModule = angular.module("githubModule");
    var githubCtrlfn = function ($scope, $location, github, $route, $routeParams) {
        $scope.route = $route;
        $scope.githubUSername = $routeParams.username;
        console.log($routeParams);
        console.log("Username: " + $routeParams.username);

        var notFoundError = function (dets) {
            $scope.error = "Could not find the requested data";
            ;
				
            //search user
            //if ($scope.githubUSername) {
            console.log('searching for ' + $scope.githubUSername + '...');
            github.getUser($scope.githubUSername).then(function (data) {
                $scope.user = data;
                console.log(data);
                github.getRepos($scope.user.repos_url).then(function (data) {
                    $scope.repos = data;
                    // $location.hash('userRepos');
                    // $anchorScroll();
                }, notFoundError);
            }, notFoundError);
            //}
        };
    };
    githubModule.controller(
        "githubCtrl",
        ['$scope', '$location', 'github', '$route', '$routeParams', githubCtrlfn]
        );
} ());