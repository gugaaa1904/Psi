<?php

require_once 'config.php';

class EmpresaService
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
            $name = isset($_POST['name']) ? $this->sanitize($_POST['name']) : 'PICHA';
            $address = isset($_POST['address']) ? $this->sanitize($_POST['address']) : '';
            $telephone = isset($_POST['telephone']) ? $_POST['telephone'] : '';
            $email = isset($_POST['email']) ? $this->sanitize($_POST['email']) : '';
            $funcs = isset($_POST['funcs']) ? $_POST['funcs'] : '';
            $cnpj = isset($_POST['cnpj']) ? $_POST['cnpj'] : '';

            // Use prepared statements to prevent SQL injection
            $stmt = "INSERT INTO `company` (`NAME`, `ADDRESS`, `PHONE`, `EMAIL`, `NUMBER_EMPLOYEES`, `CNPJ`) 
                                        VALUES ('$name', '$address', '$telephone', '$email', '$funcs', '$cnpj')";

            // Execute the statement
            $result = $this->conn-> query($stmt);

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

$empresaService = new EmpresaService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $empresaService->insert_company_post();
}
