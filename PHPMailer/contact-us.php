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
$transport->setUsername($EMAIL_ADDRESS);
$transport->setPassword($REFRESH_TOKEN);

// Create the Mailer using your created Transport
$mailer = new Swift_Mailer($transport);

// Use a function to handle sending emails
function sendEmail($data, $mailer, $EMAIL_ADDRESS) {
    try {
        // Create a message
        $message = new Swift_Message();
        $message->setSubject('Message from your website');

        // Use the $data array to get the form fields
        $message->setBody("Name: {$data['name']}\nEmail: {$data['email']}\nMessage: {$data['message']}");
        $message->setFrom([$data['email'] => $data['name']]);
        $message->setTo([$EMAIL_ADDRESS]);

        // Send the message
        $result = $mailer->send($message);

        echo json_encode(['success' => true]);
    } catch (Exception $e) {
        echo json_encode(['success' => false, 'error' => $e->getMessage()]);
    }
}

// Handle the POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    sendEmail($data, $mailer, $EMAIL_ADDRESS);
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method']);
}
