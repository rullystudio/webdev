import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../Component/Navbar';
function FormPegawai() {
    const navigate = useNavigate();
    const [nama, setNama] = useState('');
    const [selectedFile, setSelectedFile] = useState(null); // Tambahkan state untuk file
  
    const handleNamaChange = (event) => {
      setNama(event.target.value);
    };
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]); // Set file yang diunggah
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
    
      const formData = new FormData(); // Buat instance FormData
      formData.append('file', selectedFile); // Tambahkan file ke FormData
      formData.append('nama', nama); // Tambahkan data lain ke FormData
    
    
      try {
        const response = await fetch('http://localhost/project/webdev/pegawai/store', {
          method: 'POST',
          body: formData // Kirim FormData sebagai body request
        });
  
        const responseData = await response.json();
        console.log(responseData);
        navigate('/pegawai');
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className='row justify-content-center mt-5'>
                <div className="col-lg-7 col-sm-12">
                    <div className='mt-5'>

                    </div>
                    <div className='container'>
                        <div className="card">
                            <div className="card-title text-primary p-2" style={{ borderBottom : '1px #ddd solid' }} >
                                Add Pegawai
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit}>

                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Nama</span>
                                        <input type="text" onChange={handleNamaChange} className="form-control" />
                                    </div>
                                    
                                    <div className="input-group mb-3">
                                        <input type="file" onChange={handleFileChange} className="form-control" />
                                    </div>

                                    <div className="mb-3 text-end ">
                                        <a href="/pegawai" className="btn btn-success me-2">Batal</a>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
   
    </div>
  );
}

export default FormPegawai;
