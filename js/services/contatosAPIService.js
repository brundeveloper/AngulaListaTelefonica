angular.module("listaTelefonica").factory("contatosAPI", function($http, config){
	var _getContatos = function(){
		return $http.get(config.baseUrl + "/servidor/contatos.php");
	}

	return {
		getContatos: _getContatos
	};
});