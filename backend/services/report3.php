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
$sql = "SELECT c.DAY, c.MONTH_YEAR, c.DAILY_USAGE, c.DAILY_RUNTIME, c.WEEKLY_USAGE, c.MONTHLY_USAGE, co.TARIFF
        FROM consuming c
        JOIN collaborator co ON c.COLLABORATOR_ID = co.COLLABORATOR_ID
        WHERE c.COLLABORATOR_ID = ?
        ORDER BY c.MONTH_YEAR DESC, c.MONTHLY_USAGE DESC";

$stmt = $conn->prepare($sql);

// Vincula o valor do parâmetro
$stmt->bind_param("s", $collaboratorId);

// Executa a consulta
if ($stmt->execute()) {
    // Obtém os resultados
    $result = $stmt->get_result();

    $dados = array();
    $monthsProcessed = array();

    while ($row = $result->fetch_assoc()) {
        $monthYear = $row["MONTH_YEAR"];
        $formattedDate = $row["DAY"] . '/' . $monthYear;
        $formattedUsage = $row["DAILY_USAGE"] . ' kW';
        $formattedUsagecost = $row["DAILY_USAGE"] * $row["TARIFF"] . ' €';
        $formattedUsagecostmonthly = $row["MONTHLY_USAGE"] * $row["TARIFF"] . ' €';
        $formattedDatemonth = date("F", mktime(0, 0, 0, $monthYear, 1));
        $formattedUsagemonth = $row["MONTHLY_USAGE"] . ' kW';

        $dados[] = array(
            'DATE_USAGE' => $formattedDate,
            'DAILY_USAGE' => $formattedUsage,
            'DAILY_USAGEE' => $formattedUsagecost,
            'MONTHLY_USAGEE' => $formattedUsagecostmonthly,
            'MONTH_USAGE' => $formattedDatemonth,
            'MONTHLY_USAGE' => $formattedUsagemonth,
        );
    }

    echo json_encode($dados);
} else {
    echo json_encode(array('error' => 'Erro ao executar a consulta SQL'));
}

// Fecha a conexão com o banco de dados
$conn->close();
