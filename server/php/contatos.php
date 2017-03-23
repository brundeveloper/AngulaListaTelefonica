<?php
	$contatos = array(
		array(
			'id' => 1,
			'nome' => "Bruno silva",
			'telefone' => "9999-2222",
			'data' => "2015-04-12T12:53:46.204Z",
			'operadora' => array(
				'nome' => "Oi",
				'codigo' => 14,
				'categoria' => "Celular",
				'preco' => 2
			)
		),
		array(
			'id' => 2,
			'nome' => "Sandra de oliveira",
			'telefone' => "9999-3333",
			'data' => "2015-04-12T12:53:46.204Z",
			'operadora' => array(
				'nome' => "Vivo",
				'codigo' => 15,
				'categoria' => "Celular",
				'preco' => 1
			)
		),
		array(
			'id' => 3,
			'nome' => "MARIANA DA SILVA",
			'telefone' => "9999-9999",
			'data' => "2015-04-12T12:53:46.204Z",
			'operadora' => array(
				'nome' => "Tim",
				'codigo' => 41,
				'categoria' => "Celular",
				'preco' => 3
			)
		)
	);

	echo json_encode($contatos);
?>