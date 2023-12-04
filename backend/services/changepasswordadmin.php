<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
require_once '../config.php';

class ChangePasswordAdminService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function change_password_admin()
    {
        error_log('Request Method: ' . $_SERVER["REQUEST_METHOD"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $jsonInput = file_get_contents("php://input");
            $dadosRecebidos = json_decode($jsonInput, true);

            $email = $dadosRecebidos["email"];
            $oldPassword = $dadosRecebidos["old_password"];
            $newPassword = $dadosRecebidos["new_password"];

            // Verifique se o e-mail existe
            if (!$this->is_email_exists($email)) {
                $this->response('failed', array('error' => 'Admin not found for email: ' . $email));
            }

            // Verifique se a senha antiga está correta
            if (!$this->is_password_correct($email, $oldPassword)) {
                $this->response('failed', array('error' => 'Incorrect old password'));
            }

            // Atualize a senha no banco de dados
            $hashedNewPassword = password_hash($newPassword, PASSWORD_DEFAULT);
            $this->update_password_in_database($email, $hashedNewPassword);

            $this->response('success', array('message' => 'Password changed successfully'));
        }
    }

    private function is_email_exists($email)
    {
        $stmt = $this->conn->prepare("SELECT 1 FROM admin WHERE EMAIL = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->store_result();
        $exists = $stmt->num_rows > 0;
        $stmt->close();
        return $exists;
    }

    private function is_password_correct($email, $password)
    {
        $stmt = $this->conn->prepare("SELECT PASSWORD FROM admin WHERE EMAIL = ?");
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($passwordDb);
        $stmt->fetch();
        $stmt->close();

        return password_verify($password, $passwordDb);
    }

    private function update_password_in_database($email, $hashedNewPassword)
    {
        $stmt = $this->conn->prepare("UPDATE admin SET PASSWORD = ? WHERE EMAIL = ?");
        $stmt->bind_param("ss", $hashedNewPassword, $email);
        $stmt->execute();
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
}

$changePasswordAdminService = new ChangePasswordAdminService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $changePasswordAdminService->change_password_admin();
}
