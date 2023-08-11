<?php 
namespace App\Controllers\Middleware;

use CodeIgniter\Config\Services;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Middleware\BaseMiddleware;

class CorsMiddleware extends BaseMiddleware
{
    public function __construct(RequestInterface $request, ResponseInterface $response)
    {
        $this->request = $request;
        $this->response = $response;
    }

    public function after(RequestInterface $request, ResponseInterface $response)
    {
        $response = $this->response->setHeader('Access-Control-Allow-Origin', '*')
                                   ->setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
                                   ->setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

        return $response;
    }
}
