<?php

include_once "Classe.php";

$Cor = new Corretores;

$id_corretores   = filter_input(INPUT_GET, "id_corretores" );
$cpf_corretores   = filter_input(INPUT_GET, "cpf_corretores" ,FILTER_SANITIZE_SPECIAL_CHARS);
$creci_corretores = filter_input(INPUT_GET, "creci_corretores", FILTER_VALIDATE_INT);
$nome_corretores    = filter_input(INPUT_GET, "nome_corretores", FILTER_SANITIZE_SPECIAL_CHARS ); 

$Cor -> setid_corretores($id_corretores);
$Cor -> setcpf_corretores($cpf_corretores);
$Cor -> setcreci_corretores($creci_corretores);
$Cor -> setnome_corretores($nome_corretores);

if(isset($_GET["Enviar"])){
    echo $Cor -> Cadastrar();
}

else if(isset($_GET["Exibir"])){
    echo $Cor -> Exibir();
}

else if(isset($_GET["Atualizar"])){
    echo $Cor -> Atualizar();
}

else if(isset($_GET["Excluir"])){
    echo $Cor -> Excluir();
}