<?php

require_once 'config.php';

class CompanyService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function insert_company_post()
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sanitize and validate input data
            $name = isset($_POST['name']) ? $this->sanitize($_POST['name']) : '';
            $address = isset($_POST['address']) ? $this->sanitize($_POST['address']) : '';
            $telephone = isset($_POST['telephone']) ?  $this->sanitize($_POST['telephone']) : '';
            $email = isset($_POST['email']) ? $this->sanitize($_POST['email']) : '';
            $funcs = isset($_POST['funcs']) ?  $this->sanitize($_POST['funcs']) : '';
            $cnpj = isset($_POST['cnpj']) ?  $this->sanitize($_POST['cnpj']) : '';

            $photoPath = 'services/images/' . $cnpj . '.png';


            // Mover a foto para a pasta correta
            move_uploaded_file($_FILES['companyImage']['tmp_name'], $photoPath);

            // Use prepared statements para prevenir SQL injection
            $stmt = $this->conn->prepare("INSERT INTO `Company` (`NAME`, `ADDRESS`, `PHONE`, `EMAIL`, `NUMBER_EMPLOYEES`, `CNPJ`, `PHOTO`) 
                                        VALUES (?, ?, ?, ?, ?, ?, ?)");

            $stmt->bind_param("sssssss", $name, $address, $telephone, $email, $funcs, $cnpj, $photoPath);
            $stmt->execute();

            // Obter o resultado do statement preparado
            $result = $stmt->get_result();

            if ($result === FALSE) {
                $this->response(array('status' => 'failed', 'error' => 'Invalid data received'));
            } else {
                $this->response(array('status' => 'success'));
            }
        }
    }

    private function response($data)
    {
        echo json_encode($data);
    }

    private function sanitize($input)
    {
        // Implement your sanitization logic if needed
        return $input;
    }
}

$CompanyService = new CompanyService();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['cnpj'])) {
    $CompanyService->insert_company_post();
}
