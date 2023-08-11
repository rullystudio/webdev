<?php

namespace App\Controllers;
use CodeIgniter\API\ResponseTrait;
use App\Models\UserModel;

class Home extends BaseController
{
    use ResponseTrait;
    public function index()
    {
        $model = new JadwalModel();
        $data = [
                    'hasil' => $model->findAll(),
    				'css' => 'content/home/css.php',
    				'content' => 'content/home/index.php',
    				'script' => 'content/home/script.php',
    			] ;
        return view('template', $data);
    }

    public function submit()
    {
        $requestData = $this->request->getJSON(true); // Mengambil data JSON dari permintaan
        $username = $requestData['username'];
        $password = $requestData['password'];

        // Lakukan validasi atau pemrosesan lain di sini

        // Simpan data ke database
        $model = new UserModel(); // Ganti YourModel dengan nama model Anda
        $model->insert([
            'username' => $username,
            'password' => $password
        ]);

        return $this->respond(['message' => 'Data has been successfully saved.']);
    }
}
