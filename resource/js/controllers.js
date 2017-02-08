angular.module("FinalApp")
.controller("MainController",function($scope, $resource){
	// acceder a un API REST (en este caso uno de pruebas)
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
	User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
	$scope.posts = Post.query();
	$scope.users = User.query();
	// query() --> GET /posts -> array de 
	
});