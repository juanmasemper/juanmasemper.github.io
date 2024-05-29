<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if ($email === false) {
        echo json_encode(['success' => false, 'message' => 'Dirección de correo inválida']);
        exit;
    }

    $to = 'juanmanuelsemper@gmail.com';
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $body = "
        <html>
        <head>
            <title>$subject</title>
        </head>
        <body>
            <h2>$subject</h2>
            <p><strong>Nombre:</strong> $name</p>
            <p><strong>Teléfono:</strong> $phone</p>
            <p><strong>Email:</strong> $email</p>
            <p><strong>Mensaje:</strong><br>$message</p>
        </body>
        </html>
    ";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje']);
    }
} else {
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
}
?>
