angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function(
		$scope,
		$filter,
		contatosAPI,
		operadorasAPI,
		serialGenerator
){
	$scope.app = $filter("upper")("Lista Telefonica");

	$scope.contatos = [];

	$scope.operadoras = [];

	/*$scope.contato = {
		data: 1034218800000
	};*/

	var init = function(){
		calcularImpostos($scope.contatos);
	};

	var calcularImposto = function(preco){
		var imposto = 1.2;
		return preco * imposto;
	};

	var calcularImpostos = function(contatos){
		contatos.forEach(function(contato){
			contato.operadora.precoComImposto = calcularImposto(contato.operadora.preco);
		});
	}

	var getContatosSelecionados = function(contatos){
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

			init();
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

		$scope.verificarContatoSelecionado($scope.contatos);
	};

	$scope.qtdeContatosSelecionados = function(contatos){
		contatosSelecionados = getContatosSelecionados(contatos);

		return contatosSelecionados.length;
	}

	$scope.verificarContatoSelecionado = function(contatos){
		$scope.hasContatoSelecionado = ($scope.qtdeContatosSelecionados(contatos) > 0);
	}

	$scope.ordenarPor = function(campo){
		$scope.criterioOrdenacao = campo;
		$scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
	}

	$scope.reset = function(){
		$scope.contatos = angular.copy($scope.contatos);
	}

	carregarContatos();
	carregarOperadoras();
});