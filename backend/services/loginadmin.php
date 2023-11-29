<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
require_once '../config.php';

class LogINAdminService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function login_admin()
    {
        error_log('Request Method: ' . $_SERVER["REQUEST_METHOD"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Check if 'email' and 'password' keys are set in the $_POST array
                $email = htmlspecialchars($_POST['email']);
                $password = htmlspecialchars($_POST['password']);

                $stmt = $this->conn->prepare("SELECT EMAIL, PASSWORD FROM admin WHERE EMAIL = ?");
                $stmt->bind_param("s", $email);
                $stmt->execute();
                $stmt->bind_result($emailDb, $passwordDb);

                if ($stmt->fetch()) {
                    if ($password == $passwordDb) {
                        // Password is correct
                        $this->response('success');
                    } else {
                        // Password is incorrect
                        $this->response('failed', array('error' => 'Invalid password' .", ". $email .", ". $emailDb .", ". $password .", ". $passwordDb));
                    }
                } else {
                    // Admin not found
                    $this->response('failed', array('error' => 'Admin not found for email: ' . $email));
                }

                $stmt->close();
            } 
    }

    private function response($status, $data = array())
    {
        $response = array('status' => $status);
        
        if (!empty($data)) {
            $response = array_merge($response, $data);
        }

        echo json_encode($response);
        die();
    }

    private function sanitize($input)
    {
        // Implement your sanitization logic if needed
        return $input;
    }
}

$LogInadminService = new LogINAdminService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $LogInadminService->login_admin();
}