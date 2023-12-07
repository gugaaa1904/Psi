<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");



$servername = "localhost";
$username = "root";
$password = "";
$dbname = "infocharge";

// Criando a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die("Erro na conexão com o banco de dados: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Recebe os dados do corpo da requisição
    $data = json_decode(file_get_contents('php://input'));

    // Obtém os valores
    $collaboratorId = $data->collaboratorId;
    $oldPassword = $data->oldPassword;
    $newPassword = $data->newPassword;

    // Verifica se a senha antiga está correta
    $oldPasswordHash = getPasswordFromDatabase($collaboratorId);

    if (password_verify($oldPassword, $oldPasswordHash)) {
        // Senha antiga correta, atualiza a senha na tabela collaborator
        $newPasswordHash = password_hash($newPassword, PASSWORD_DEFAULT);
        updatePasswordInDatabase($collaboratorId, $newPasswordHash);

        // Envie uma resposta de sucesso
        http_response_code(200);
        echo json_encode(['message' => 'Senha alterada com sucesso']);
    } else {
        // Senha antiga incorreta, envie uma resposta de erro
        http_response_code(400);
        echo json_encode(['error' => 'Senha antiga incorreta']);
    }
} else {
    // Método de requisição não suportado, envie uma resposta de erro
    http_response_code(405);
    echo json_encode(['error' => 'Método não permitido']);
}

// Função para obter a senha do banco de dados com base no ID do colaborador
function getPasswordFromDatabase($collaboratorId) {
    global $mysqli;

    $query = "SELECT PASSWORD FROM collaborator WHERE COLLABORATOR_ID = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param('s', $collaboratorId);
    $stmt->execute();
    $stmt->bind_result($password);
    $stmt->fetch();
    $stmt->close();

    return $password;
}

// Função para atualizar a senha no banco de dados
function updatePasswordInDatabase($collaboratorId, $newPasswordHash) {
    global $mysqli;

    $query = "UPDATE collaborator SET PASSWORD = ? WHERE COLLABORATOR_ID = ?";
    $stmt = $mysqli->prepare($query);
    $stmt->bind_param('ss', $newPasswordHash, $collaboratorId);
    $stmt->execute();
    $stmt->close();
}

?>