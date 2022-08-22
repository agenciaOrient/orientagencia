
<?php
require __DIR__ . '/vendor/autoload.php';
/**@debug */

use PHPMailer\PHPMailer\PHPMailer;

///print_r($_POST);
$name_form_contact = $_POST["name"];
$phone_form_contact = $_POST["phone"];
$mail_form_contact = $_POST["mail"];
$subjec_form_contact = $_POST["opt"];
$messagem_form_contact = $_POST["messagem"];

$mail = new PHPMailer();
$mail->isSMTP();
$mail->Host = MAIL["host"];
$mail->SMTPAuth = true;
$mail->Username = MAIL["username"];
$mail->Password = MAIL["password"];
$mail->Port = MAIL["port"];
$mail->setLanguage('pt');
$mail -> charSet = "UTF-8"; 
$mail->setFrom('contato@orientagencia.com.br');
$mail->addAddress('richard.seolin@orientagencia.com.br');

$mail->isHTML(true);
$mail->Subject = $subjec_form_contact;
$mail->Body = "Nome :{$name_form_contact}<br>
Telefone:{$phone_form_contact}<br>
Email para Contato:{$mail_form_contact}<br>
Assunto:{$messagem_form_contact}";

if ($mail->send()) {
$retona =['erro'=>true,'msg'=>"<div class='alert alert-success'>E-mail Enviado Com Sucesso</div>"];

} else { 
    $retona =['erro'=>true,'msg'=>"<div class='alert alert-danger'> Erro ao  enviar e-mail </div>"];

}
echo json_encode($retona);
