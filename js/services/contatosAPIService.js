angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	var _getContatos = function(){
		return $http.get(config.baseUrl + "/servidor/contatos.php");
	}

	var _saveContatos = function(contato){
		//return $http.post(config.baseUrl + "/servidor/contatos.php");
	}

	var _getContato = function(id){
		//return $http.get(config.baseUrl + "/servidor/detalhesContato/"+id);
		return $http.get(config.baseUrl + "/servidor/detalhesContato.php?id="+id);
	}

	return {
		getContatos: _getContatos,
		getContato: _getContato
	};
});