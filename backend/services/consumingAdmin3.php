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

$companyId = $_GET['company_id'];
// Consulta SQL para obter a soma total da coluna DAILY_USAGE para todos os IDs
$sql = "SELECT 
DAY,MONTH_YEAR,
SUM(MONTHLY_USAGE) AS total_monthly_usage
FROM consuming c
JOIN collaborator col ON c.COLLABORATOR_ID = col.COLLABORATOR_ID
WHERE col.COMPANY_ID = $companyId
GROUP BY MONTH_YEAR";

$result = $conn->query($sql);

if ($result) {
    // Inicializa um array associativo para armazenar os dados
    $dados = array();

    // Loop sobre os resultados e adiciona cada linha ao array
    while ($row = $result->fetch_assoc()) {
        $dados[] = array(
            'DAY' => $row["DAY"],
            'MONTHLY_USAGE' => $row["total_monthly_usage"],
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