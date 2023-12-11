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
        WHERE c.COLLABORATOR_ID = ?";

$stmt = $conn->prepare($sql);

// Vincula o valor do parâmetro
$stmt->bind_param("s", $collaboratorId);

// Executa a consulta
$stmt->execute();

// Obtém os resultados
$result = $stmt->get_result();

$dados = array();

// ...

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        // Formatação desejada
        $formattedDate = $row["DAY"] . '/' . $row["MONTH_YEAR"];
        $formattedUsage = $row["DAILY_USAGE"] . ' kW';

        // Multiplica pelo valor do TARIFF para obter o custo diário
        $formattedUsagecost = $row["DAILY_USAGE"] * $row["TARIFF"] . ' €';

        // Multiplica pelo valor do TARIFF para obter o custo mensal
        $formattedUsagecostmonthly = $row["MONTHLY_USAGE"] * $row["TARIFF"] . ' €';

        $formattedDatemonth = $row["MONTH_YEAR"];
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
    echo json_encode(array()); // Retorna um array vazio se não houver dados
}

// ...


// Fecha a conexão com o banco de dados
$conn->close();
?>
