<?php

require_once 'vendor/autoload.php';

// Assuming you have the necessary variables set in your environment
$CLIENT_ID = $_ENV['CLIENT_ID'];
$CLIENT_SECRET = $_ENV['CLIENT_SECRET'];
$REDIRECT_URI = $_ENV['REDIRECT_URI'];
$EMAIL_ADDRESS = $_ENV['EMAIL_ADDRESS'];
$REFRESH_TOKEN = $_ENV['REFRESH_TOKEN'];

// Swift Mailer Transport
$transport = new Swift_SmtpTransport('smtp.gmail.com', 465, 'ssl');
$transport->setUsername("usama.lion65@gmail.com");
$transport->setPassword("Masaublita1819");

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Function to send booking emails
function sendBookingEmail($mailer, $formData, $EMAIL_ADDRESS)
{

    // For example, sending a basic email using Swift Mailer
    $message = (new Swift_Message('Booking Message from your website'))
        ->setFrom([$formData['email'] => 'Sender'])
        ->setTo([$EMAIL_ADDRESS])
        ->setBody(
            "
            Name: {$formData['fname']}
            Email: {$formData['email']}
            Tel/Whatsapp: {$formData['tel']}
            Destination: {$formData['destination']}
            People: {$formData['people']}
            Date: {$formData['date']}
            Message: {$formData['message']}\n
            "
                . isset($formData['noDay']) ? "noDay: {$formData['noDay']}\n" : "noDay: N/A"
        );

    $result = $mailer->send($message);

    return $result ? ['success' => true] : ['success' => false];
}



// Handle the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve data from the request
    $data = json_decode(file_get_contents('php://input'), true);

    // Use the function to send booking emails
    $result = sendBookingEmail($mailer, $data, $EMAIL_ADDRESS);
    echo json_encode($result);
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
