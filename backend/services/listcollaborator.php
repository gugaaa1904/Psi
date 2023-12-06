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
$sql = "SELECT NAME, COMPANYNAME, PHONE FROM collaborator WHERE COMPANY_ID = ?";
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
        );
    }

    echo json_encode($collaborators);
} else {
    echo json_encode(array());
}

$conn->close();
?>