/////////////////////////////////////////////////////////////
//Variável principal
var app;

/////////////////////////////////////////////////////////////
//Importa o express
var express = require("express");

//Importa o body-parser
var bodyParser = require("body-parser");

//Importa as rotas
var routes = require("./routes");

/////////////////////////////////////////////////////////////
//Atribui a função ao App
app = express();

//Atribui a pasta padrão
app.use(express.static("../../client"));

//Codificação da url
app.use(bodyParser.urlencoded({
	extended: true
}));

//Utilização do JSON
app.use(bodyParser.json());

//Atribui as rotas
routes(app);

//Exporta o App
module.exports = app;

/////////////////////////////////////////////////////////////