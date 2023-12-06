<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "infocharge";

// Criando a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}


// Recupera os parâmetros da solicitação
$name = $_GET['name'];
$email = $_GET['email'];

// Query para remover o colaborador com base no nome e e-mail
$sql = "DELETE FROM collaborator WHERE name = '$name' AND email = '$email'";

if ($conn->query($sql) === TRUE) {
    // A remoção foi bem-sucedida
    echo json_encode(['status' => 'success', 'message' => 'Colaborador removido com sucesso']);
} else {
    // Erro ao remover o colaborador
    echo json_encode(['status' => 'error', 'message' => 'Erro ao remover o colaborador: ' . $conn->error]);
}

// Fecha a conexão com o banco de dados
$conn->close();

?>
