angular.module("FinalApp")
.controller("MainController",function($scope, $resource){
	// acceder a un API REST (en este caso uno de pruebas)
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
	User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
	$scope.posts = Post.query();
	$scope.users = User.query();
	// query() --> GET /posts -> devuelve array
	
	$scope.removePost = function(post) {
		Post.delete({id: post.id}, function(data){
			console.log(data);
		});
		// en un API REST normal, esto es lo que habría que hacer.  Placeholder aunque devuelve true, realmente no borra el recurso y por eso lo vamos a simular
		//$scope.posts = Post.query();		
		// con esta forma de hacerlo, no habría que volver a reconsultar el API, lo cual es más eficiente
		$scope.posts = $scope.posts.filter(function(element){
			return element.id !== post.id;
		});
		
	}
	
})
.controller("PostController",function($scope,$resource,$routeParams){
	Post = $resource("http://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
	$scope.post = Post.get({id: $routeParams.id});
	// get() --> GET/post -> devuelve objeto
});