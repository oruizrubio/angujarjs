angular.module("mainModule", [])
	.filter("removeHtml", function(){
		return function(texto) {
			return String(texto).replace(/<[^>]+>/gm,'');	
			//return texto.toUpperCase();	
		}
	})
	.controller("FiltersController", function($scope){
		$scope.mi_html = "<p>Hola Mundo</p>";
		$scope.a_json = {};
		$scope.a_json.title = "titulo";
		$scope.a_json.body = "cuerpo";
		$scope.costo = 2;
	});
	
	