<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once '../config.php';

class PowerMonthlyService
{
    private $conn;

    public function __construct()
    {
        $this->conn = connect();
    }

    public function powermonthly()
    {
        error_log('Request Method: ' . $_SERVER["REQUEST_METHOD"]);

        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $jsonInput = file_get_contents("php://input");
            $dadosRecebidos = json_decode($jsonInput, true);

            $collaboratorId = $dadosRecebidos['collaborator_id'];
            $selectedMonth = $dadosRecebidos['month'];
            $stmt = $this->conn->prepare("SELECT DAY,MONTH_YEAR,DAILY_USAGE,DAILY_RUNTIME,WEEKLY_USAGE,MONTHLY_USAGE FROM consuming WHERE COLLABORATOR_ID=? AND MONTH_YEAR=?");
            $stmt->bind_param("is", $collaboratorId, $selectedMonth);
            $stmt->execute();
            $stmt->bind_result($day, $month_year, $daily_usage, $daily_runtime, $weekly_usage, $monthly_usage);

            if ($stmt->fetch()) {
                $this->response('sucess', array(
                    'DAY' => $day,
                    'MONTH_YEAR' => $month_year,
                    'DAILY_USAGE' => $daily_usage,
                    'DAILY_RUNTIME' => $daily_runtime,
                    'WEEKLY_USAGE' => $weekly_usage,
                    'MONTHLY_USAGE' => $monthly_usage,
                ));
            } else {
                $this->response('failed', array('error' => 'Consuming not found for id: ' . $collaboratorId));
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

$powerMonthlyService = new PowerMonthlyService();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $powerMonthlyService->powermonthly();
}
