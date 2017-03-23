angular.module("listaTelefonica").controller("nodeCtrl", function($scope, $http){
	$scope.operadoras = [];

	//Chama o servidor ativado em node
	$http.get("http://localhost:3000/operadoras")
	.then(function(response){
		$scope.operadoras = response.data;
	});
});