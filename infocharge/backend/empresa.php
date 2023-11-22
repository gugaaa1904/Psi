<?php
require_once 'config.php';
$conn = connect();

public function insert_empresa_post()
{
    if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $sql = "INSERT INTO `empresa` (`NOME`, `ENDERECO`, `TELEFONE`, `E_MAIL`, `NUMERO_DE_FUNCIONARIOS`, `CNPJ`, `password`) 
        VALUES ($this->post('NOME'), $this->post('ENDERECO'), $this->post('TELEFONE'), $this->post('E_MAIL'),$this->post('NUMERO_DE_FUNCIONARIOS'), $this->post('CNPJ'), $this->post('password'))";
    
        $result = $conn->query($sql); 
        if ($result === FALSE)
        {
            $this->response(array('status' => 'failed'));
        }
        else
        {
            $this->response(array('status' => 'success'));
        } 
    }
}

?>