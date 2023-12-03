<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
require_once '../config.php';

class LogINCollaboratorService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function login_collaborator()
    {
        error_log('Request Method: ' . $_SERVER["REQUEST_METHOD"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            
            // Check if 'email' and 'password' keys are set in the $_POST array
                //$email = htmlspecialchars(isset($_POST['email'])) ?  $this->sanitize($_POST['email']) : '';
                //$password = htmlspecialchars(isset($_POST['password'])) ?  $this->sanitize($_POST['password']) : '';
                $jsonInput = file_get_contents("php://input");
                $dadosRecebidos = json_decode($jsonInput, true);
                $email = $dadosRecebidos["email"];
                $password = $dadosRecebidos["password"];
                $stmt = $this->conn->prepare("SELECT EMAIL, PASSWORD FROM collaborator WHERE EMAIL = ? AND PASSWORD =?");
                $stmt->bind_param("ss", $email, $password);
                $stmt->execute();
                $stmt->bind_result($emailDb, $passwordDb);
                
                if ($stmt->fetch()) {
                        $this->response('success' , array('error' => 'Good password' .", ". $email .", ". $emailDb .", ". $password .", ". $passwordDb));
                    
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

$LogIncollaboratorService = new LogINCollaboratorService();

//echo $_POST;
//echo $_POST['password'];
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $LogIncollaboratorService->login_collaborator();

}