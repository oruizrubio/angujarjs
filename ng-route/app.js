//Module
angular.module("Controlador", ["ngRoute"])
.config(function($routeProvider){
	$routeProvider
		.when("/", {
			controller: "ReposController",
			templateUrl: "templates/home.html"
		})
		.when("/repo/:name",{
			controller: "RepoController",
			templateUrl: "templates/repo.html"
		})
		.otherwise("/");
});



	
	