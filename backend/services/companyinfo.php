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

$company_id = $_GET['company_id'];
// Consulta SQL para obter a média, mínimo e máximo das colunas DAILY_USAGE e WEEKLY_USAGE
$sql = "SELECT 
            AVG(WEEKLY_USAGE) AS average_weekly_usage,
            AVG(MONTHLY_USAGE) AS average_monthly_usage
        FROM consuming c
        JOIN collaborator col ON c.COLLABORATOR_ID = col.COLLABORATOR_ID
        WHERE col.COMPANY_ID = $company_id";

$result = $conn->query($sql);

if ($result) {
    // Inicializa um array associativo para armazenar os dados
    $dados = array();

    // Loop sobre os resultados e adiciona cada linha ao array
    while ($row = $result->fetch_assoc()) {
        $dados[] = array(
            'average_weekly_usage' => number_format($row["average_weekly_usage"], 1),
            'average_monthly_usage' => number_format($row["average_monthly_usage"], 1),
        );
    }

    // Usa json_encode para converter o array em JSON e imprime
    echo json_encode($dados);
} else {
    echo "Erro na consulta: " . $conn->error;
}

// Fecha a conexão com o banco de dados
$conn->close();
?>
