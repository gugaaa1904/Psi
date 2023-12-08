<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../config.php';

class ChangePasswordService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function change_password()
    {
        $collaboratorId = $_POST['collaboratorId'];
        $oldPassword = $_POST['oldPassword'];
        $newPassword = $_POST['newPassword'];

        $stmt = $this->conn->prepare("SELECT PASSWORD FROM collaborator WHERE COLLABORATOR_ID = ? AND PASSWORD = ?");
        $stmt->bind_param("is", $collaboratorId, $oldPassword);
        $stmt->execute();
        $stmt->bind_result($passwordDb);
        if(!$stmt->fetch()){
            $this->response('failed', array('error' => 'oldPassword errada: ' . $collaboratorId . $oldPassword));
        }
        $stmt->close();

        $stmt = $this->conn->prepare("UPDATE collaborator SET PASSWORD = ? WHERE COLLABORATOR_ID = ?");
        $stmt->bind_param("si",$newPassword, $collaboratorId);
        $stmt->execute();
        if($stmt->fetch()){
            $this->response('sucess');
        }else{
            $this->response('failed', array('error' => 'Password não foi atualizada: ' . $collaboratorId));
        }
        $stmt->close();  
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

$changePasswordService = new ChangePasswordService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $changePasswordService -> change_password();
}

?>