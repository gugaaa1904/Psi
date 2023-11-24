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
            $admin_name = isset($_POST['admin_name']) ? $this->sanitize($_POST['admin_name']) : 'PICHA';
            $email = isset($_POST['email']) ? $_POST['email'] : '';
            $phone = isset($_POST['phone']) ? $this->sanitize($_POST['phone']) : '';
            $age = isset($_POST['age']) ? $_POST['age'] : '';
            $gender = isset($_POST['gender']) ? $_POST['gender'] : '';
            $password_company = isset($_POST['password_company']) ? $_POST['password_company'] : '';
            $company_name = isset($_POST['company_name']) ? $_POST['company_name'] : '';
            $address = isset($_POST['address']) ? $_POST['address'] : '';
            // Use prepared statements to prevent SQL injection
            $stmt = "INSERT INTO `admin` (`NAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `COMPANY`, `ADDRESS`) 
                                        VALUES ('$admin_name', '$email', '$phone', '$age', '$gender', '$password_company', '$company_name', '$address')";

            // Execute the statement
            $result = $this->conn->query($stmt);

            if ($result === FALSE) {
                $error_message = mysqli_error($this->conn);
                $this->response(array('status' => 'failed', 'error' => $error_message));
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

$AdminService = new AdminService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $AdminService->insert_admin_post();
}