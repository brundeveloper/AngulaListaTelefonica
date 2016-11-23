<?php
	$operadoras = array(
		array(
			'nome' => "Oi",
			'codigo' => 14,
			'categoria' => "Celular",
			'preco' => 2
		),
		array(
			'nome' => "Vivo",
			'codigo' => 15,
			'categoria' => "Celular",
			'preco' => 1
		),
		array(
			'nome' => "Tim",
			'codigo' => 41,
			'categoria' => "Celular",
			'preco' => 3
		),
		array(
			'nome' => "GVT",
			'codigo' => 25,
			'categoria' => "Fixo",
			'preco' => 1
		),
		array(
			'nome' => "Embratel",
			'codigo' => 21,
			'categoria' => "Fixo",
			'preco' => 2
		)
	);

	echo json_encode($operadoras);
?>