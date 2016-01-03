(function () {

	var githubModule = angular.module("githubModule", ['datatables', 'ngRoute']);
	
	githubModule.config(function ($routeProvider) {
		$routeProvider
			.when('/',{
				templateUrl:'/views/userDetails.html',
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