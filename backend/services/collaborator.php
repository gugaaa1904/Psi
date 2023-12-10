<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../config.php';

class CollaboratorService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function insert_collaborator_post()
    {
        /**
         * name: "", !
          *  companyname: "", !
          *  address: "", !
          *  email: "", !
          *  phone: "", !
          *  age: "", !
          *  gender: "", !
           * password: "", !
           * plafond: "",  !
          *  tariff: "", !
          *  end_date: "", !
          *  start_date: "", !

          *  emailplug: "",
           * passwordplug: "",
           * ipplug:
         */
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Sanitize and validate input data
            $name = isset($_POST['name']) ? $this->sanitize($_POST['name']) : '';
            $companyid = isset($_POST['company_id']) ? $this->sanitize($_POST['company_id']) : '';
            $email = isset($_POST['email']) ?  $this->sanitize($_POST['email']) : '';
            $phone = isset($_POST['phone']) ? $this->sanitize($_POST['phone']) : '';
            $age = isset($_POST['age']) ?  $this->sanitize($_POST['age']) : '';
            $gender = isset($_POST['gender']) ?  $this->sanitize($_POST['gender']) : '';
            $password = isset($_POST['password']) ?  $this->sanitize($_POST['password']) : '';
            $address = isset($_POST['address']) ?  $this->sanitize($_POST['address']) : '';
            $plafond = isset($_POST['plafond']) ?  $this->sanitize($_POST['plafond']) : '';
            $tariff = isset($_POST['tariff']) ?  $this->sanitize($_POST['tariff']) : '';
            $start_date = isset($_POST['start_date']) ?  $this->sanitize($_POST['start_date']) : '';
            $end_date = isset($_POST['end_date']) ?  $this->sanitize($_POST['end_date']) : '';

            // Use prepared statements to prevent SQL injection
            $stmt = $this->conn->prepare("INSERT INTO `Collaborator` (`COMPANY_ID`, `NAME`, `COMPANYNAME`, `EMAIL`, `PHONE`, `AGE`, `GENDER`, `PASSWORD`, `ADDRESS`, `PLAFOND`, `TARIFF`, `END_DATE`, `START_DATE`) 
                                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

            // Bind parameters
            $stmt->bind_param(
                "isssissssiiss",
                $companyid,
                $name,
                $companyname,
                $email,
                $phone,
                $age,
                $gender,
                $password,
                $address,
                $plafond,
                $tariff,
                $end_date,
                $start_date
            );

            // Execute the statement
            $result = $stmt->execute();

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

$collaboratorService = new CollaboratorService();

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['plafond'])) {
    $collaboratorService->insert_collaborator_post();
}
