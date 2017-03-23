angular.module("listaTelefonica").controller("novoContatoCtrl", function(
	$scope,
	contatosAPI,
	serialGenerator,
	$location,
	operadoras
){
	$scope.app = "Lista Telefonica";

	$scope.contatos = [];

	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function(contato){
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		//contatosAPI.saveContato
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
		$location.path("/contatos");
	};
});