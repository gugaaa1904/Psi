<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once 'config.php';
$conn = connect();

// Set up the POST data
$data = array(
    'NOME' => 'John Doe',
    'ENDERECO' => 'Rua ABC',
    'TELEFONE' => '968912443',
    'E_MAIL' => 'johndoe@example.com',
    'NUMERO_DE_FUNCIONARIOS' => '1',
    'CNPJ' => '234567890',
);

// Send the POST request
$options = array(
    'http' => array(
        'method' => 'POST',
        'header' => 'Content-Type: application/x-www-form-urlencoded',
        'content' => http_build_query($data),
    ),
);

$context = stream_context_create($options);
$result = file_get_contents('http://localhost:80/projetofinal/backend/company.php', false, $context);

// Check the response
if ($result === 'success') {
    echo "The POST request was successful.\n";
} else {
    echo "The POST request failed. The response was: {$result}\n";
}
