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


header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $jsonInput = file_get_contents("php://input");
    $dadosRecebidos = json_decode($jsonInput, true);
    $id = $dadosRecebidos['COLLABORATOR'];

    $stmt = $this->conn->prepare("SELECT NAME, COMPANYNAME, EMAIL, PHONE, AGE, GENDER , ADDRESS , TARIFF , PLAFOND FROM collaborator WHERE COLLABORATOR_ID = ?");
    $stmt->bind_param("s", $id);
    $stmt->execute();
    $stmt->bind_result($name, $company_name, $email, $phone, $age, $gender, $address, $tariff, $plafond);

    $result = $conn->query($sql);

    if ($result === FALSE) {
        $this->response(array('status' => 'failed', 'error' => 'Invalid data received'));
    } else {
        $this->response(array(
            'NAME' => $name, 
            'COMPANYNAME'=> $company_name,
            'EMAIL' => $email,
            'PHONE' => $phone,
            'AGE' => $age,
            'GENDER' => $gender,
            'ADDRESS' => $address,
            'TARIFF' => $tariff,
            'PLAFOND' => $plafond,
        ));
    }
}
// Fecha a conexão com o banco de dados
$conn->close();

private function response($status, $data = array())
    {
        $response = array('status' => $status);
        
        if (!empty($data)) {
            $response = array_merge($response, $data);
        }

        echo json_encode($response);
        die();
    }

?>