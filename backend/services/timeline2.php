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
$sql = "SELECT MONTH_YEAR, COUNT(*) AS TOTAL_CHARGES FROM consuming WHERE COLLABORATOR_ID = ? GROUP BY MONTH_YEAR";
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
        $formattedDate = $row["MONTH_YEAR"];
        $formattedUsage = $row["TOTAL_CHARGES"];

        $dados[] = array(
            'DATE_USAGE' => $formattedDate,
            'TOTAL_CHARGES' => $formattedUsage,
        );
    }

    echo json_encode($dados);
} else {
    echo json_encode(array()); // Retorna um array vazio se não houver dados
}

// Fecha a conexão com o banco de dados
$conn->close();
