<?php

class Corretores{

    private $id_corretores;
    private $cpf_corretores;
    private $creci_corretores;
    private $nome_corretores;

    public function getid_corretores(){
        return($this -> id_corretores);
    }

    public function setid_corretores($id_corretores){
        $this -> id_corretores = $id_corretores;
    }

    public function getcpf_corretores(){
        return($this -> cpf_corretores);
    }

    public function setcpf_corretores($cpf_corretores){
        $this -> cpf_corretores = $cpf_corretores;
    }

    public function getcreci_corretores(){
        return($this -> creci_corretores);
    }

    public function setcreci_corretores($creci_corretores){
        $this -> creci_corretores = $creci_corretores;
    }

    public function getnome_corretores(){
        return($this -> nome_corretores);
    }

    public function setnome_corretores($nome_corretores){
        $this -> nome_corretores = $nome_corretores;
    }

    // Método Cadastro

    public function Cadastrar(){
        include_once "Conexao.php";

        try {
            $stmt = $conn->prepare('INSERT INTO TB_Corretores (CPF, Creci, Nome) VALUES (:CPF, :Creci, :Nome)');
            $stmt->bindParam(':CPF',$this -> cpf_corretores, PDO::PARAM_STR);
            $stmt->bindParam(':Creci',$this -> creci_corretores, PDO::PARAM_INT);
            $stmt->bindParam(':Nome',$this -> nome_corretores, PDO::PARAM_STR);
            
            if($stmt->execute()){
                $retorno = "Cadastro realizado com sucesso!";
            }
        } 
        catch(PDOException $e) {
            echo 'Erro ' . $e->getMessage();
        }

        return($retorno);
    }

    public function Exibir(){
        include_once "Conexao.php";

        try{
            $stmt = $conn->prepare('SELECT * FROM TB_Corretores');
            
            $stmt -> execute();
            $result = $stmt->fetchAll();
            $retorno = json_encode($result);
        }

        catch(PDOException $e) {
            echo 'ERROR: ' . $e->getMessage();
        }

        return($retorno);
    }

    public function Atualizar(){
        include_once "Conexao.php";

        try {
            $stmt = $conn->prepare('UPDATE TB_Corretores SET Nome = :Nome WHERE ID = :ID');
            $stmt->bindParam(':Nome',$this -> nome_corretores, PDO::PARAM_STR);
            $stmt->bindParam(':ID',$this -> id_corretores, PDO::PARAM_STR);
            
            if($stmt->execute()){
                $retorno = "Atualizado com sucesso!";
            }
        } 
        catch(PDOException $e) {
            echo 'Erro ' . $e->getMessage();
        }

        return($retorno);
    }
    
    public function Excluir(){
        include_once "Conexao.php";

        try {
            $stmt = $conn->prepare('DELETE FROM TB_Corretores WHERE ID = :ID');
            $stmt->bindParam(':ID',$this -> id_corretores, PDO::PARAM_STR);
            
            if($stmt->execute()){
                $retorno = "Excluido com sucesso!";
            }
        } 
        catch(PDOException $e) {
            echo 'Erro ' . $e->getMessage();
        }

        return($retorno);
    }
    

}