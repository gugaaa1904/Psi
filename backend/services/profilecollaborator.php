<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../config.php';

class ProfileCollaboratorService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function profile_load()
    {
        error_log('Request Method: ' . $_SERVER["REQUEST_METHOD"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $jsonInput = file_get_contents("php://input");
            $dadosRecebidos = json_decode($jsonInput, true);
            $id = $dadosRecebidos['collaborator_id'];
        
            $stmt = $this->conn->prepare("SELECT c.NAME as COMPANYNAME, cc.NAME, cc.EMAIL, cc.PHONE, cc.AGE, cc.GENDER, cc.ADDRESS, cc.TARIFF, cc.PLAFOND, c.PHOTO 
            FROM collaborator cc 
            JOIN company c ON cc.COMPANY_ID = c.COMPANY_ID 
            WHERE cc.COLLABORATOR_ID = ?");

            $stmt->bind_param("i", $id);
            $stmt->execute();
            $stmt->bind_result($company_name, $name, $email, $phone, $age, $gender, $address, $tariff, $plafond, $photo);
            
        
            if($stmt->fetch()){
                $this->response('sucess', array(
                    'NAME' => $name, 
                    'COMPANYNAME'=> $company_name,
                    'EMAIL' => $email,
                    'PHONE' => $phone,
                    'AGE' => $age,
                    'GENDER' => $gender,
                    'ADDRESS' => $address,
                    'TARIFF' => $tariff,
                    'PLAFOND' => $plafond,
                    'PHOTO' => $photo,
                ));
            }else{
                $this->response('failed', array('error' => 'Collaborator not found for id: ' . $id));
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

$profileCollaboratorService = new ProfileCollaboratorService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $profileCollaboratorService->profile_load();
}
