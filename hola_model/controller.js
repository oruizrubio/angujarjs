angular.module("MyFirstApp", [])
.controller("FirstController", function($scope){
	$scope.nuevocomentario = {};
	$scope.comentarios = [
		{
			comentario: "buen curso",
			username: "codigofacilito"
		},
		{
			comentario: "mal curso",
			username: "otrousuario"		
		}
	];
	$scope.nombre = "Oscar";
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});