(function () {

	var githubModule = angular.module("githubModule", ['datatables', 'ngRoute']);
	
	githubModule.config(function ($routeProvider) {
		$routeProvider
			.when('/',{
				template:'',
				controller:'githubCtrl'
				
			})
			.when("/user/:username",{
				templateUrl:'/views/userDetailsAndRepos.html',
			})
			.when("/user/:username/repos",
				{
					templateUrl: '/views/userRepos.html',
					// controller:'githubCtrl'
				}).
			otherwise({ redirectTo: "/" });
	});	
})()