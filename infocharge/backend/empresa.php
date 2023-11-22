<?php
require_once 'config.php';
$conn = connect();

$sql = "INSERT INTO `empresa` (`NOME`, `ENDERECO`, `TELEFONE`, `E_MAIL`, `NUMERO_DE_FUNCIONARIOS`, `CNPJ`, `password`) 
VALUES ('jony', 'jony', 968912443, 'joao@gmail.com', 1, 2, 'papspa')";

if ($conn->query($sql) === TRUE) {
 echo "New record created successfully";
} else {
 echo "Error: " . $sql . "<br>" . $conn->error;
}

?>