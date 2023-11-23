<?php

header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once 'services/company.php';
//require_once 'employee_services.php';
//require_once 'contract_services.php';
// ... include other service files ...
require_once 'config.php';
$conn = connect();

// Determine the request method
$requestMethod = $_SERVER['REQUEST_METHOD'];
$requestUri = $_SERVER['REQUEST_URI'];

// Remove query parameters from the URI
$uriParts = explode('?', $requestUri);
$uri = $uriParts[0];

// Route the request based on the URI and method
switch ($uri) {
    case '/company':
        if ($requestMethod === 'GET') {
            //clients_list();
        } elseif ($requestMethod === 'POST') {
            insert_company_post();
        } else {
            http_response_code(405); // Method Not Allowed
        }
        break;
    case '/employees':
        // Handle employees routes similarly
        break;
    case '/contracts':
        // Handle contracts routes similarly
        break;
        // Add more cases for other routes...
    default:
        http_response_code(404); // Not Found
        break;
}
