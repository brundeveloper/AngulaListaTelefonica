angular.module("listaTelefonica").controller("detalhesContatoCtrl", function(
	$scope,
	contato
){
	$scope.app = "Detalhes Contato";

	$scope.contato = contato.data;
});