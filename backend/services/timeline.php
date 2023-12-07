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

// Consulta SQL para obter os dados desejados, com filtro opcional do mês
$sql = "SELECT DAY, MONTH_YEAR, DAILY_USAGE, DAILY_RUNTIME, WEEKLY_USAGE, MONTHLY_USAGE FROM consuming WHERE COLLABORATOR_ID = ?";
$stmt = $conn->prepare($sql);

// Vincula o valor do parâmetro
$stmt->bind_param("s", $collaboratorId);

// Executa a consulta
$stmt->execute();

// Obtém os resultados
$result = $stmt->get_result();

$dados = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Formatação desejada
        $formattedDate = $row["DAY"] . '/' . $row["MONTH_YEAR"];
        $formattedUsage = $row["DAILY_USAGE"] . ' kW';

        $dados[] = array(
            'DATE_USAGE' => $formattedDate,
            'DAILY_USAGE' => $formattedUsage,
        );
    }

    echo json_encode($dados);
} else {
    echo json_encode(array()); // Retorna um array vazio se não houver dados
}

// Fecha a conexão com o banco de dados
$conn->close();
