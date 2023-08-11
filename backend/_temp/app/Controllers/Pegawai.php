<?php 
namespace App\Controllers;

use CodeIgniter\Controller;
use CodeIgniter\API\ResponseTrait;
use App\Models\PegawaiModel;

class Pegawai extends Controller
{
    protected $pegawaiModel ;
    use ResponseTrait;

    public function __construct() 
    {
        $pegawaiModel = new PegawaiModel();
    }

    public function index()
    {
        $pegawaiModel = new PegawaiModel();
        $data['pegawai'] = $pegawaiModel->findAll();

        return $this->response->setJSON($data);
    }

    public function store()
	{

		$pegawaiModel = new PegawaiModel();
        $requestData = $this->request->getJSON(true);
        $file = $this->request->getFile('file');
        $nama = $this->request->getPost('nama');
        //$nama = $requestData['nama'];

        if ($file->isValid() && !$file->hasMoved()) {
            $newName = $file->getRandomName();
            $file->move('./uploads', $newName);

			    $data = [
			        'nama' => $nama,
			        'foto' => $newName
			    ];
			$pegawaiModel->insert($data) ;
        }


        

    	return $this->response->setJSON(['message' => $nama ]);
	    

	}



    public function show($id)
    {
        $pegawaiModel = new PegawaiModel();
        $data['result'] = $pegawaiModel->find($id);

        return $this->response->setJSON($data);
    }

    public function update($id)
	{

        $requestData = $this->request->getJSON(true);
        
        $nama = $requestData['nama'];

	    $pegawaiModel = new PegawaiModel();
		    $data = [
		        'nama' => $nama
		    ];
		
        $pegawaiModel->update($id, $data) ;
    	return $this->response->setJSON(['message' => $id ]);
	    

	}

    public function delete($id)
    {
        $pegawaiModel = new PegawaiModel();
        $data['result'] = '';
        $pegawaiModel->delete($id);
        return $this->response->setJSON($data);
    }

}
