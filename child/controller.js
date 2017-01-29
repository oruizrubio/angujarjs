angular.module("MyFirstApp", [])
	.run(function($rootScope){
		$rootScope.nombre = "CodigoFacilito";
	})
	.controller("FisrtController", function($scope){
		$scope.nombre = "Oscar";
		setTimeout(function(){
			$scope.$apply(function(){
				$scope.nombre = ":3";
			});
		},1000);
	})
	.controller("ChildController", function($scope){
		$scope.nombre = "Hijo";
	});
	
	