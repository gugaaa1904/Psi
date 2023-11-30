<?php

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

require_once 'services/company.php';
require_once 'services/admin.php';
require_once 'services/loginadmin.php';
require_once 'services/collaborator.php';
require_once 'services/logincollaborator.php';
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
        if (
            $requestMethod === 'GET'
        ) {
            //clients_list();
        } elseif ($requestMethod === 'POST') {
            insert_company_post();
        } else {
            http_response_code(405); // Method Not Allowed
        }
        break;
    case '/admin':
        if ($requestMethod === 'GET') {
            //clients_list();
        } elseif ($requestMethod === 'POST') {
            insert_admin_post();
        } else {
            http_response_code(405); // Method Not Allowed
        }
        break;
    case '/collaborator':
        if (
            $requestMethod === 'GET'
        ) {
            //clients_list();
        } elseif ($requestMethod === 'POST') {
            insert_collaborator_post();
        } else {
            http_response_code(405); // Method Not Allowed
        }
        break;
    case '/loginadmin':
        if (
            $requestMethod === 'GET'
        ) {
            //clients_list();
        } elseif ($requestMethod === 'POST') {
            login_admin();
        } else {
            http_response_code(405); // Method Not Allowed
        }
        break;
    case '/logincollaborator':
        if (
            $requestMethod === 'GET'
        ) {
            //clients_list();
        } elseif ($requestMethod === 'POST') {
            login_collaborator();
        } else {
            http_response_code(405); // Method Not Allowed
        }
        break;
    default:
        http_response_code(404); // Not Found
        break;
}
