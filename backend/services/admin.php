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
<<<<<<< HEAD
=======
            $companyname = trim($companyname);
>>>>>>> nodejs
            $sql = $this->conn->prepare("SELECT COMPANY_ID FROM Company WHERE NAME = ?");
            $sql->bind_param("s", $companyname);
            $sql->execute();
            $sql->bind_result($companyid);

<<<<<<< HEAD
=======
            echo "Company Name: $companyname<br>";
            echo "Database Encoding: " . $this->conn->character_set_name() . "<br>";

>>>>>>> nodejs
            // Fetch the result
            if (!$sql->fetch()) {
                // Company not found, handle the error (return an appropriate response)
                $this->response(array('status' => 'failed', 'error' => 'Company not found'));
                return;
            }

            $sql->close();

            // Use prepared statements to prevent SQL injection
            $stmt = $this->conn->prepare("INSERT INTO `Admin` (`COMPANY_ID`, `NAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `COMPANYNAME`, `ADDRESS`) 
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

            // Bind parameters
            $stmt->bind_param("issiissss", $companyid, $name, $email, $phone, $age, $gender, $password, $companyname, $address);

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
        // Implement your sanitization logic if needed
        return $input;
    }
}

$adminService = new AdminService();

<<<<<<< HEAD
if ($_SERVER["REQUEST_METHOD"] == "POST") {
=======
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['admin_name'])) {
>>>>>>> nodejs
    $adminService->insert_admin_post();
}