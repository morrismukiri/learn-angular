(function () {
    var githubModule = angular.module("githubModule");
    githubModule.controller(
        "searchCtrl",
        ['$scope', '$location',
            function ($scope, $location) {


                $scope.search = function (githubUSername) {
                    $location.path('/user/' + githubUSername);
                };

            }]);
} ());