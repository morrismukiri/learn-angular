(function () {
	var github = function ($http) {
		var getUser = function (githubUSername) {
			return $http.get('https://api.github.com/users/' + githubUSername).
				then(function (response) {
					return response.data;
				});
		};
		var getRepos = function (repos_url) {
			console.log('Fetching repos from '+ repos_url);
			return $http.get(repos_url).
				then(function (response) {
					return response.data;
				})
		}
		return {
			getUser:getUser,
			getRepos:getRepos
		}
	}
	var module= angular.module('githubModule');
		module.factory('github',github);
} ());