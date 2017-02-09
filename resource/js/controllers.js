angular.module("FinalApp")
.controller("MainController",function($scope, $resource, PostResource){
	// acceder a un API REST (en este caso uno de pruebas)
	User = $resource("http://jsonplaceholder.typicode.com/users/:id",{id: "@id"});
	$scope.posts = PostResource.query();
	$scope.users = User.query();
	// query() --> GET /posts -> devuelve array
	
	$scope.removePost = function(post) {
		PostResource.delete({id: post.id}, function(data){
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
.controller("PostController",function($scope,PostResource,$routeParams, $location){
	$scope.title = "Editar Post";
	$scope.post = PostResource.get({id: $routeParams.id});
	// get() --> GET/post -> devuelve objeto
	$scope.savePost = function(){
		PostResource.update({id: $scope.post.id}, {data: $scope.post}, function(data){
			console.log(data);
			$location.path("/post/"+$scope.post.id);
		});
	}	
})
.controller("NewPostController",function($scope,PostResource,$location){
	$scope.post = {};
	$scope.title = "Crear Post";
	$scope.savePost = function(){
		PostResource.save({data: $scope.post}, function(data){
			console.log(data);
			$location.path("/");
		});
	}
});