<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "infocharge";

// ID do colaborador que você deseja consultar
$collaboratorId = 35; // Substitua pelo ID desejado

// Parâmetro do mês (verifica se foi passado na solicitação)
//$selectedMonth = isset($_GET['month']) ? intval($_GET['month']) : null;

// Criando a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta SQL para obter os dados desejados, com filtro opcional do mês
$sql = "SELECT DAY, MONTH_YEAR, DAILY_USAGE, DAILY_RUNTIME, WEEKLY_USAGE, MONTHLY_USAGE FROM consuming WHERE COLLABORATOR_ID = $collaboratorId";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $dados[] = array(
            'DAY' => $row["DAY"],
            'MONTH_YEAR' => $row["MONTH_YEAR"],
            'DAILY_USAGE' => $row["DAILY_USAGE"],
        );
    }

    echo json_encode($dados);
} else {
    echo json_encode(array()); // Retorna um array vazio se não houver dados
}


// Fecha a conexão com o banco de dados
$conn->close();
?>