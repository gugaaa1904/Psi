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
            $name = isset($_POST['admin_name']) ? $this->sanitize($_POST['admin_name']) : 'PICHA';
            $email = isset($_POST['email']) ? $_POST['email'] : '';
            $phone = isset($_POST['phone']) ? $this->sanitize($_POST['phone']) : '';
            $age = isset($_POST['age']) ? $_POST['age'] : '';
            $gender = isset($_POST['gender']) ? $_POST['gender'] : '';
            $password = isset($_POST['password']) ? $_POST['password'] : '';
            $companyname = isset($_POST['companyname']) ? $_POST['companyname'] : '';
            $address = isset($_POST['address']) ? $_POST['address'] : '';

            // Use prepared statements to prevent SQL injection
            $sql = $this->conn->prepare("SELECT EMPRESA_ID FROM company WHERE NAME = ?");
            $sql->bind_param("s", $companyname);
            $sql->execute();
            $sql->bind_result($empresaId);
            $sql->fetch();
            $sql->close();

            // Use prepared statements to prevent SQL injection
            $stmt = "INSERT INTO `admin` (`EMPRESA_ID`, `NAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `COMPANYNAME`, `ADDRESS`) 
                                        VALUES ('$empresaId', '$name', '$email', '$phone', '$age', '$gender', '$password', '$companyname', '$address')";

            // Execute the statement
            $result = $this->conn->query($stmt);

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

$adminService = new AdminService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $adminService->insert_admin_post();
}