<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../config.php';

class GetCompaniesService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function get_companies()
    {
        error_log('Request Method: ' . $_SERVER["REQUEST_METHOD"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $stmt = $this->conn->prepare("
                SELECT 
                    NAME
                FROM 
                    company
            ");

            if (!$stmt) {
                $this->response('failed', array('error' => 'Prepare failed: (' . $this->conn->errno . ') ' . $this->conn->error));
            }

            $stmt->execute();

            if ($stmt->errno) {
                $this->response('failed', array('error' => 'Execute failed: (' . $stmt->errno . ') ' . $stmt->error));
            }

            $stmt->bind_result($name);

            $companies = array();

            while ($stmt->fetch()) {
                $companies[] = $name;
            }

            if (!empty($companies)) {
                $this->response('success', array('NAMES' => $companies));
            } else {
                $this->response('failed', array('error' => 'Companies not found! '));
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
}

$GetCompaniesService = new GetCompaniesService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $GetCompaniesService->get_companies();
}
