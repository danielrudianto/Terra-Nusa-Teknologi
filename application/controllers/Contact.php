<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Contact extends CI_Controller
{
	public function index()
	{
		$this->load->view('contact');
		$this->load->view('footer');
	}

	public function sendEmail()
	{
		$email = $this->input->post('email');
		$name = $this->input->post('name');
		$phone = $this->input->post('phone_number');
		$message = $this->input->post('message');
		$from = $this->config->item('smtp_user');

		$this->load->library('email');
		$this->load->config('email');

		$this->email->initialize();
		$this->email->set_newline("\r\n");

		$this->email->from($from, "system@terranusa.tech");
		$this->email->to("marketing@terranusa.tech");
		$this->email->reply_to($email);

		$this->email->subject('Pesan baru');
		$this->email->message('Pesan baru dari ' . $name . '(' . $phone . ').\r\n' . 'Email: ' . $email . '\r\n' . 'Pesan: ' . $message . '.');
		if($this->email->send()){
			echo 1;
		} else {
			$error = $this->email->print_debugger();
			print_r($error);
			echo 0;
		}
	}
}
