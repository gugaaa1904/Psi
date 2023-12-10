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

$collaboratorId = $_GET['collaborator_id'];
// Consulta SQL para obter a soma total da coluna DAILY_USAGE e o PLAFOND para todos os IDs
$sql = "SELECT 
    c.DAY,
    c.MONTH_YEAR,
    COALESCE(SUM(c.DAILY_USAGE), 0) AS total_daily_usage,
    co.PLAFOND
FROM consuming c
JOIN collaborator co ON c.COLLABORATOR_ID = co.COLLABORATOR_ID
WHERE c.COLLABORATOR_ID = $collaboratorId
GROUP BY c.DAY";

$result = $conn->query($sql);

if ($result) {
    // Inicializa um array associativo para armazenar os dados
    $dados = array();

    // Loop sobre os resultados e adiciona cada linha ao array
    while ($row = $result->fetch_assoc()) {
        $dados[] = array(
            'DAY' => $row["DAY"],
            'DAILY_USAGE' => $row["total_daily_usage"],
            'PLAFOND' => $row["PLAFOND"],
            'MONTH_YEAR' => $row["MONTH_YEAR"],
        );
    }

    // Usa json_encode para converter o array em JSON e imprime
    echo json_encode($dados);
} else {
    echo "Erro na consulta: " . $conn->error;
}

// Fecha a conexão com o banco de dados
$conn->close();
