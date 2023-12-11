<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../config.php';

class ProfileAdminService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function profileadmin_load()
    {
        error_log('Request Method: ' . $_SERVER["REQUEST_METHOD"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $jsonInput = file_get_contents("php://input");
            $dadosRecebidos = json_decode($jsonInput, true);
            $id = $this->sanitize($dadosRecebidos['admin_id']);
            
            // Use LEFT JOIN para incluir a tabela Company
            $stmt = $this->conn->prepare("
                SELECT 
                    admin.NAME,
                    admin.COMPANYNAME,
                    admin.EMAIL,
                    admin.PHONE,
                    admin.AGE,
                    admin.GENDER,
                    admin.ADDRESS,
                    admin.PHOTOO,
                    company.PHOTO
                FROM 
                    admin
                LEFT JOIN 
                    company ON admin.COMPANY_ID = company.COMPANY_ID
                WHERE 
                    admin.ADMIN_ID = ?
            ");

            if (!$stmt) {
                $this->response('failed', array('error' => 'Prepare failed: (' . $this->conn->errno . ') ' . $this->conn->error));
            }

            $stmt->bind_param("i", $id);
            $stmt->execute();

            if ($stmt->errno) {
                $this->response('failed', array('error' => 'Execute failed: (' . $stmt->errno . ') ' . $stmt->error));
            }

            $stmt->bind_result($name, $company_name, $email, $phone, $age, $gender, $address, $photoo,$photo);

            if ($stmt->fetch()) {
                $this->response('success', array(
                    'NAME' => $name, 
                    'COMPANYNAME' => $company_name,
                    'EMAIL' => $email,
                    'PHONE' => $phone,
                    'AGE' => $age,
                    'GENDER' => $gender,
                    'ADDRESS' => $address,
                    'PHOTOO' => $photoo, // Adicione a foto à resposta
                    'PHOTO' => $photo,
                ));
            } else {
                $this->response('failed', array('error' => 'Admin not found for id: ' . $id));
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
        // Utilize a função real_escape_string para prevenir SQL Injection
        return $this->conn->real_escape_string($input);
    }
}

$profileAdminService = new ProfileAdminService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $profileAdminService->profileadmin_load();
}
?>
