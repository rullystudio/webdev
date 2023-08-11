<?php 

namespace App\Models;

use CodeIgniter\Model;

class UserModel extends Model
{
    protected $table = 'user'; // Ganti 'users' dengan nama tabel pengguna Anda
    protected $primaryKey = 'id_user'; // Ganti 'id' dengan nama kolom ID pengguna
    protected $allowedFields = ['nama', 'username', 'password', 'role']; // Daftar kolom yang dapat diisi

    // Metode untuk memeriksa kredensial login
    
    public function login($username, $password)
    {
        return $this->where('username', $username)
                    ->where('password', $password)
                    ->countAllResults();
    }
}
