<?php

namespace App\Controllers;

use CodeIgniter\Controller;
use App\Models\UserModel;
use CodeIgniter\API\ResponseTrait;

class Auth extends Controller
{
     
    protected $userModel ;
    use ResponseTrait;

    public function __construct() 
    {
        $userModel = new UserModel();
    }

    public function index()
    {
        
    }

   
     public function login()
    {
        $requestData = $this->request->getJSON(true);
        $username = $requestData['username'];
        $password = $requestData['password'];

        $userModel = new UserModel();
        $cek = $userModel->login($username, $password);

        if ($cek > 0) {
            return $this->response->setJSON(['message' => 'success']);
        } else {
            return $this->response->setJSON(['message' => 'failed' ]);
        }
    }

    // Metode untuk validasi login
    private function validateLogin($username, $password)
    {
        // Lakukan validasi login sesuai dengan kebutuhan Anda
        // Misalnya, memeriksa kredensial di database

        // Contoh sederhana:
        return ($username === 'user' && $password === 'password');
    }

    public function logout()
    {
        $session = session();
        $session->destroy();

        return redirect()->to('/');
    }
}
