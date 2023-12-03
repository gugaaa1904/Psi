<?php
// Configurações do banco de dados
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "infocharge";

// ID do colaborador que você deseja consultar
$collaboratorId = 3; // Substitua pelo ID desejado

// Parâmetro do mês (verifica se foi passado na solicitação)
//$selectedMonth = isset($_GET['month']) ? intval($_GET['month']) : null;

// Criando a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

// Consulta SQL para obter os dados desejados, com filtro opcional do mês
$sql = "SELECT NAME, COMPANYNAME, EMAIL, PHONE, AGE, GENDER , ADDRESS , TARIFF , PLAFOND FROM collaborator WHERE COLLABORATOR_ID = $collaboratorId";


$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $dados[] = array(
            'NAME' => $row["NAME"],
            'COMPANYNAME' => $row["COMPANYNAME"],
            'EMAIL' => $row["EMAIL"],
            'PHONE' => $row["PHONE"],
            'AGE' => $row["AGE"],
            'GENDER' => $row["GENDER"],
            'ADDRESS' => $row["ADDRESS"],
            'TARIFF' => $row["TARIFF"],
            'PLAFOND' => $row["PLAFOND"],
        );
    }

    echo json_encode($dados);
} else {
    echo json_encode(array()); // Retorna um array vazio se não houver dados
}


// Fecha a conexão com o banco de dados
$conn->close();
?>