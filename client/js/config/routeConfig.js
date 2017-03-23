angular.module("listaTelefonica").config(function($routeProvider){
	$routeProvider.when("/contatos", {
		templateUrl: "view/contatos.html"
	});

	$routeProvider.when("/novoContato", {
		templateUrl: "view/novoContato.html",
		controller: "novoContatoCtrl",
		resolve: {
			operadoras: function(operadorasAPI){
				return operadorasAPI.getOperadoras();
			}
		}
	});

	$routeProvider.when("/detalhesContato/:id", {
		templateUrl: "view/detalhesContato.html",
		controller: "detalhesContatoCtrl",
		resolve: {
			contato: function(contatosAPI, $route){
				return contatosAPI.getContato($route.current.params.id);
			}
		}
	});

	$routeProvider.when("/node", {
		templateUrl: "view/node.html"
	});

	$routeProvider.when("/error", {
		templateUrl: "view/error.html"
	});

	$routeProvider.otherwise({
		redirectTo: "/contatos"
	});
});