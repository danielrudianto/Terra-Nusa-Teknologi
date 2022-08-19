<?php defined('BASEPATH') OR exit('No direct script access allowed');

$config = array(
    'protocol' => 'mail', // 'mail', 'sendmail', or 'smtp'
    'smtp_host' => 'mail.terranusa.tech', 
    'smtp_port' => 465,
    'smtp_user' => 'system@terranusa.tech',
    'smtp_pass' => 'N&mp8?.~9cLY',
    'smtp_crypto' => 'tls', //can be 'ssl' or 'tls' for example
    'mailtype' => 'text', //plaintext 'text' mails or 'html'
    'smtp_timeout' => '4', //in seconds
    'charset' => 'iso-8859-1',
    'wordwrap' => TRUE
);