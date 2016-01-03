(function () {

	var githubModule = angular.module("githubModule", ['datatables', 'ngRoute']);
	
	githubModule.config(function ($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl:'/views/userDetailsAndRepos.html',
				// controller:'githubCtrl'
				
			})
			.when('/repos',
				{
					templateUrl: '/views/userRepos.html',
					// controller:'githubCtrl'
				}).
			otherwise({ redirectTo: "/" });
	});	
})()