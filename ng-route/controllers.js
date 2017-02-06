angular.module("Controlador")
    //Controller
    .controller("ReposController", function($scope, $http) {
        $scope.repos = [];
   $http.get("https://api.github.com/users/oruizrubio/repos")
            .success(function(data) {
                $scope.posts = data;
                for (var i = data.length - 1; i >= 0; i--) {
                    var repo = data[i];
                    $scope.repos.push(repo.name);
                };
            })
            .error(function(err) {
                console.log(err);
            });
        $scope.optionSelected = function(data) {
            $scope.$apply(function() {
                $scope.main_repo = data;
            })
        }
        $scope.clean = function() {
            $scope.main_repo = null;
            $('input').val('');
        };
    })
	.controller("RepoController", function($scope, $http, $routeParams) {
		$scope.repo = {};
		$http.get("https://api.github.com/repos/oruizrubio/"+$routeParams.name)
            .success(function(data) {
				console.log("o1: " + data);
                $scope.repo = data;
            })
            .error(function(err) {
                console.log(err);
            });		
		
	});