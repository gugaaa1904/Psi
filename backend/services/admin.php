<?php

require_once 'config.php';

class AdminService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function insert_admin_post()
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sanitize and validate input data
            $name = isset($_POST['admin_name']) ? $this->sanitize($_POST['admin_name']) : '';
            $email = isset($_POST['email']) ?  $this->sanitize($_POST['email']) : '';
            $phone = isset($_POST['phone']) ? $this->sanitize($_POST['phone']) : '';
            $age = isset($_POST['age']) ?  $this->sanitize($_POST['age']) : '';
            $gender = isset($_POST['gender']) ?  $this->sanitize($_POST['gender']) : '';
            $password = isset($_POST['password']) ?  $this->sanitize($_POST['password']) : '';
            $companyname = isset($_POST['companyname']) ?  $this->sanitize($_POST['companyname']) : '';
            $address = isset($_POST['address']) ?  $this->sanitize($_POST['address']) : '';

            // Use prepared statements to prevent SQL injection
            $companyname = trim($companyname);
            $sql = $this->conn->prepare("SELECT COMPANY_ID FROM Company WHERE NAME = ?");
            $sql->bind_param("s", $companyname);
            $sql->execute();
            $sql->bind_result($companyid);

            // Fetch the result
            if (!$sql->fetch()) {
                // Company not found, handle the error (return an appropriate response)
                $this->response(array('status' => 'failed', 'error' => 'Company not found'));
                return;
            }

            $sql->close();

            // Processar a imagem
            $photo = isset($_FILES['companyImage']) ? $_FILES['companyImage'] : null;

            // Verificar se uma imagem foi enviada
            if ($photo && $photo['error'] == 0) {
                // Defina o caminho onde a imagem será armazenada no servidor
                $uploadDir = "caminho/para/o/diretorio/onde/armazenar/as/imagens/";
                $uploadFile = $uploadDir . basename($photo['name']);

                // Mova o arquivo para o diretório de destino
                if (move_uploaded_file($photo['tmp_name'], $uploadFile)) {
                    // Imagem movida com sucesso, continue com a inserção no banco de dados

                    // Inclua a coluna PHOTO no INSERT e vincule o parâmetro correspondente
                    $stmt = $this->conn->prepare("INSERT INTO `Admin` (`COMPANY_ID`, `NAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `COMPANYNAME`, `ADDRESS`, `PHOTO`) 
                                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmt->bind_param("issiisssss", $companyid, $name, $email, $phone, $age, $gender, $password, $companyname, $address, $uploadFile);
                } else {
                    // Falha ao mover o arquivo, retorne uma resposta adequada
                    $this->response(array('status' => 'failed', 'error' => 'Failed to move uploaded file'));
                    return;
                }
            } else {
                // Nenhuma imagem enviada, continue com a inserção no banco de dados
                $stmt = $this->conn->prepare("INSERT INTO `Admin` (`COMPANY_ID`, `NAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `COMPANYNAME`, `ADDRESS`) 
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
                $stmt->bind_param("issiissss", $companyid, $name, $email, $phone, $age, $gender, $password, $companyname, $address);
            }

            // Execute the statement
            $result = $stmt->execute();

            // Check the result
            if ($result === FALSE) {
                $this->response(array('status' => 'failed', 'error' => 'Invalid data received'));
            } else {
                $this->response(array('status' => 'success'));
            }

            $stmt->close();
        }
    }

    private function response($data)
    {
        echo json_encode($data);
    }

    private function sanitize($input)
    {
        // Implemente sua lógica de saneamento se necessário
        return $input;
    }
}

$adminService = new AdminService();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['admin_name'])) {
    $adminService->insert_admin_post();
}
?>
