<?php 
// app/Filters/AuthFilter.php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Config\Services;

class AuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        // Periksa apakah pengguna sudah masuk atau tidak
        

    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Apabila Anda memerlukan tindakan setelah pemrosesan permintaan,
        // Anda dapat melakukannya di sini.
    }
}
