<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "infocharge";


// Parâmetro do mês (verifica se foi passado na solicitação)
//$selectedMonth = isset($_GET['month']) ? intval($_GET['month']) : null;

// Criando a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

$companyId = $_GET['company_id'];
$sql = "SELECT c.NAME, c.COMPANYNAME, c.PHONE, c.COLLABORATOR_ID, cn.WEEKLY_USAGE, cn.MONTHLY_USAGE
        FROM collaborator c
        LEFT JOIN consuming cn ON c.COLLABORATOR_ID = cn.COLLABORATOR_ID
        WHERE c.COMPANY_ID = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $companyId);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $collaborators[] = array(
            'NAME' => $row["NAME"],
            'COMPANYNAME' => $row["COMPANYNAME"],
            'PHONE' => $row["PHONE"],
            'COLLABORATOR_ID' => $row["COLLABORATOR_ID"],
            'WEEKLY_USAGE' => $row["WEEKLY_USAGE"],
            'MONTHLY_USAGE' => $row["MONTHLY_USAGE"],
        );
    }

    echo json_encode($collaborators);
} else {
    echo json_encode(array());
}

$conn->close();
