<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "infocharge";

// ID do colaborador que você deseja consultar
$collaboratorId = 35; // Substitua pelo ID desejado

// Parâmetro do mês (verifica se foi passado na solicitação)
$selectedMonth = isset($_GET['month']) ? intval($_GET['month']) : null;

// Criando a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta SQL para obter os dados desejados, com filtro opcional do mês
$sql = "SELECT DAY, MONTH_YEAR, DAILY_USAGE, DAILY_RUNTIME, WEEKLY_USAGE, MONTHLY_USAGE FROM consuming WHERE COLLABORATOR_ID = $collaboratorId";
if ($selectedMonth !== null) {
    $sql .= " AND MONTH_YEAR = $selectedMonth";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Inicializa um array associativo para armazenar os dados
    $dados = array();

    // Loop sobre os resultados e adiciona cada linha ao array
    while($row = $result->fetch_assoc()) {
        $dados[] = array(
            'MONTH_YEAR' => $row["MONTH_YEAR"],
            'DAY' => $row["DAY"],
            'DAILY_USAGE' => $row["DAILY_USAGE"],
            'DAILY_RUNTIME' => $row["DAILY_RUNTIME"],
            'WEEKLY_USAGE' => $row["WEEKLY_USAGE"],
            'MONTHLY_USAGE' => $row["MONTHLY_USAGE"],
        );
    }

    // Usa json_encode para converter o array em JSON e imprime
    echo json_encode($dados);
} else {
    echo "Nenhum resultado encontrado para o COLLABORATOR_ID $collaboratorId";
}

// Fecha a conexão com o banco de dados
$conn->close();
?>
