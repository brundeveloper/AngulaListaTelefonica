/////////////////////////////////////////////////////////////
//Importa path
var path = require("path");

/////////////////////////////////////////////////////////////
//Função que monta as rotas
var routes = function(app){
	//Rota Teste
 	app.route("/teste")
 	.get(function(req, res){
 		//
 		res.send("funcionou");
 	});

 	//Rota Teste JSON
 	app.route("/testeJson")
 	.get(function(req, res){
 		//
 		res.json({
 			0: [{
 				'id': 1,
 				'descricao': "Teste"
 			}],
 			1: [{
 				'id': 2,
 				'descricao': "Teste novo"
 			}]
 		});
 	});

	//Habilitando HTML5MODE
	app.all("/*", function(req, res){
		//Obtem o index do projeto
		res.sendFile(path.resolve("../../client/index.html"));
	});
};

/////////////////////////////////////////////////////////////
//Exporta a rota
module.exports = routes;

/////////////////////////////////////////////////////////////