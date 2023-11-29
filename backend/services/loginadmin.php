<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once __DIR__ . '/../config.php';

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
            if (isset($_POST['email']) && isset($_POST['password'])) {
                $email = htmlspecialchars($_POST['email']);
                $password = htmlspecialchars($_POST['password']);

                $stmt = $this->conn->prepare("SELECT ADMIN_ID, COMPANY_ID, NAME, EMAIL, PASSWORD FROM admin WHERE EMAIL = ?");
                $stmt->bind_param("s", $email);
                $stmt->execute();
                $stmt->bind_result($adminId, $companyId, $name, $emailDb, $passwordDb);

                if ($stmt->fetch()) {
                    if (password_verify($password, $passwordDb)) {
                        // Password is correct
                        $this->response('success', array('admin_id' => $adminId, 'company_id' => $companyId, 'name' => $name));
                    } else {
                        // Password is incorrect
                        $this->response('failed', array('error' => 'Invalid password'));
                    }
                } else {
                    // Admin not found
                    $this->response('failed', array('error' => 'Admin not found for email: ' . $email));
                }

                $stmt->close();
            } else {
                // 'email' or 'password' keys are not set in the $_POST array
                $this->response('failed', array('error' => 'Email and password are required'));
            }
        } else {
            // Invalid request method
            $this->response('failed', array('error' => 'Invalid request method'));
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
$LogInadminService->login_admin();
