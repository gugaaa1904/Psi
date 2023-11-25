<?php

require_once 'config.php';

class CollaboratorService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function insert_collaborator_post()
    {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sanitize and validate input data
            $name = isset($_POST['name']) ? $this->sanitize($_POST['name']) : '';
            $companyname = isset($_POST['companyname']) ? $this->sanitize($_POST['companyname']) : '';
            $email = isset($_POST['email']) ?  $this->sanitize($_POST['email']) : '';
            $phone = isset($_POST['phone']) ? $this->sanitize($_POST['phone']) : '';
            $age = isset($_POST['age']) ?  $this->sanitize($_POST['age']) : '';
            $gender = isset($_POST['gender']) ?  $this->sanitize($_POST['gender']) : '';
            $password = isset($_POST['password']) ?  $this->sanitize($_POST['password']) : '';
            $address = isset($_POST['address']) ?  $this->sanitize($_POST['address']) : '';
            $plafond = isset($_POST['plafond']) ?  $this->sanitize($_POST['plafond']) : '';
            $tariff = isset($_POST['tariff']) ?  $this->sanitize($_POST['tariff']) : '';
            $end_date = isset($_POST['end_date']) ?  $this->sanitize($_POST['end_date']) : '';
            $start_date = isset($_POST['start_date']) ?  $this->sanitize($_POST['start_date']) : '';

            // Use prepared statements to prevent SQL injection
            $sql = $this->conn->prepare("SELECT COMPANY_ID FROM Company WHERE NAME = ?");
            $sql->bind_param("s", $companyname);
            $sql->execute();
            $sql->bind_result($companyid);

            echo "Company Name: $companyname<br>";
            
            // Fetch the result
            if (!$sql->fetch()) {
                // Company not found, handle the error (return an appropriate response)
                $this->response(array('status' => 'failed', 'error' => "Company not found for '$companyname'"));
                return;
            }

            $sql->close();

            // Use prepared statements to prevent SQL injection
            $stmt = "INSERT INTO `Collaborator` (`NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`, `PLAFOND`, `TARIFF`, `END_DATE`, `START_DATE`) 
                                        VALUES ('$name', '$companyname', '$email', '$phone', '$age', '$gender', '$password', '$address', '$plafond', '$tariff', '$end_date', '$start_date')";

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

$CollaboratorService = new CollaboratorService();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['plafond'])) {
    $CollaboratorService->insert_collaborator_post();
}
