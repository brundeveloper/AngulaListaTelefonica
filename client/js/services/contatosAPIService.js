angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	var _getContatos = function(){
		//return $http.get(config.baseUrl + "/server/php/contatos.php"); //PHP
		return $http.get(config.baseUrl + "/testeJson"); //NODEJS
	};

	var _saveContatos = function(contato){
		//return $http.post(config.baseUrl + "/server/php/contatos.php");
	};

	var _getContato = function(id){
		return $http.get(config.baseUrl + "/server/php/detalhesContato.php?id="+id);
	};

	return {
		getContatos: _getContatos,
		getContato: _getContato
	};
});