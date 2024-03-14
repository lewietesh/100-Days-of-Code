<?php
function sendEmail($to, $subject, $message, $headers) {
    if(mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully to $to!";
    } else {
        echo "Email sending failed...";
    }
}

// Usage
$to = "recipient@example.com";
$subject = "Hello!";
$message = "This is a test email.";
$headers = "From: sender@example.com";

sendEmail($to, $subject, $message, $headers);
?>