angular.module("MyFirstApp", [])
.controller("FirstController", ["$scope", function(m){
	m.nuevocomentario = {};
	m.comentarios = [
		{
			comentario: "buen curso",
			username: "codigofacilito"
		},
		{
			comentario: "mal curso",
			username: "otrousuario"		
		}
	];
	m.nombre = "Oscar";
	m.agregarComentario = function(){
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {};
	}
}]);