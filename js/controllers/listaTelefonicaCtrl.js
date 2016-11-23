angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function(
		$scope,
		$filter,
		contatosAPI,
		operadorasAPI,
		serialGenerator
){
	$scope.app = "Lista Telefonica";

	$scope.contatos = [];

	$scope.operadoras = [];

	/*$scope.contato = {
		data: 1034218800000
	};*/

	function getContatosSelecionados(contatos){
		data = contatos.filter(function(contato){
			if (contato.selecionado){
				return contato;
			}
		});

		return data;
	}

	var carregarContatos = function(){
		contatosAPI.getContatos().success(function(data, status){
			$scope.contatos = data;
			$scope.error = ((data.length > 0)) ?"" :"Não foi possível carregar os dados!";
		})
		.error(function(data, status){
			$scope.message = "Aconteceu um problema!";
		});
	};

	var carregarOperadoras = function(){
		operadorasAPI.getOperadoras().success(function(data, status){
			$scope.operadoras = data;
		});
	}

	$scope.adicionarContato = function(contato){
		contato.serial = serialGenerator.generate();
		contato.data = new Date();
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};

	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato){
			if (!contato.selecionado){
				return contato;
			}
		});
	};

	$scope.qtdeContatosSelecionados = function(contatos){
		contatosSelecionados = getContatosSelecionados(contatos);

		return contatosSelecionados.length;
	}

	$scope.ordenarPor = function(campo){
		$scope.criterioOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	}

	carregarContatos();
	carregarOperadoras();
});