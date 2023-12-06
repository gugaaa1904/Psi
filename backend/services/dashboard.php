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
    // Em caso de erro na conexão, envia uma resposta JSON indicando o erro
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Erro na conexão com o banco de dados: ' . $conn->connect_error));
    exit;
}

$collaboratorId = $_GET['collaborator_id'];
// Consulta SQL para obter os dados desejados, com filtro opcional do mês
$sql = "SELECT DAY, MONTH_YEAR, DAILY_USAGE, DAILY_RUNTIME, WEEKLY_USAGE, MONTHLY_USAGE FROM consuming WHERE COLLABORATOR_ID = ?";



// Prepara a declaração SQL
$stmt = $conn->prepare($sql);

// Verifica se a preparação foi bem-sucedida
if ($stmt === false) {
    // Em caso de erro na preparação, envia uma resposta JSON indicando o erro
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Erro na preparação da consulta SQL: ' . $conn->error));
    exit;
}


// Vincula o parâmetro COLLABORATOR_ID
$stmt->bind_param('s', $collaboratorId);





// Executa a consulta
$stmt->execute();

// Obtém o resultado da consulta
$result = $stmt->get_result();

// Se houver um erro, envia uma resposta JSON indicando o erro
if ($result === false) {
    header('Content-Type: application/json');
    echo json_encode(array('error' => 'Erro ao executar a consulta: ' . $stmt->error));
    exit;
}

// Obtém os dados do resultado
$dataFromServer = $result->fetch_all(MYSQLI_ASSOC);

// Envia a resposta como JSON
header('Content-Type: application/json');
echo json_encode($dataFromServer);
exit;
?>