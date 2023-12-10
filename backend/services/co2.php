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
// Consulta SQL para obter os dados necessários para o gráfico
$sql = "SELECT 
            MONTH_YEAR,
            MONTHLY_USAGE
        FROM consuming c
        JOIN collaborator col ON c.COLLABORATOR_ID = col.COLLABORATOR_ID
        WHERE col.COMPANY_ID = $companyId";

$result = $conn->query($sql);

if ($result) {
    // Inicializa arrays para armazenar os dados
    $categories = array();
    $monthlyUsageData = array();

    // Loop sobre os resultados e adiciona cada linha aos arrays
    while ($row = $result->fetch_assoc()) {
        $categories[] = $row["MONTH_YEAR"];
        $monthlyUsageData[] = $row["MONTHLY_USAGE"];
    }

    // Cria um array para o gráfico com os dados formatados
    $chartData = array(
        'categories' => $categories,
        'monthlyUsageData' => $monthlyUsageData,
    );

    // Usa json_encode para converter o array em JSON e imprime
    echo json_encode($chartData);
} else {
    echo "Erro na consulta: " . $conn->error;
}

// Fecha a conexão com o banco de dados
$conn->close();
