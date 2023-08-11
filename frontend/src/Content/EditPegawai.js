import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar2 from '../Component/Navbar2';

function EditPegawai({ pegawai }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [result, setPegawai] = useState(null);
    const [nama, setNama] = useState('');
    const [selectedFile, setSelectedFile] = useState(null); 
    const handleNama = (event) => {
      setNama(event.target.value);
    };
    
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); 
      };
    useEffect(() => {
                        fetch('http://localhost/project/webdev/pegawai/show/'+id) // Sesuaikan dengan path API di CodeIgniter
                        .then(response => response.json())
                        .then(data => {
                            setPegawai(data.result);
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                    }, [id]);
    if (!result) {
        return <p>Loading...</p>;
        }       

    
        const handleUpdate = async (event) => {
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
            <Navbar2/>
            <div className="container">            
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-7 col-sm-12">
                        <div className="card">
                            <div className="card-title p-2" style={{ borderBottom : '1px #ddd solid' }}>
                                <h4>Edit Pegawai</h4>
                            </div>
                            <div className="card-body">
                                
                                <form onSubmit={handleUpdate}>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">Nama</span>
                                        <input type="text" name="nama" value={ nama } onChange={handleNama} className="form-control" />
                                    </div> 
                                    
                                    <div className="input-group mb-3">
                                        <input type="file" onChange={handleFileChange} className="form-control" />
                                    </div>
                                    <div className=" mb-3 text-end ">
                                        <a href="/pegawai" className="btn btn-success me-2">Batal</a>
                                        <button className="btn btn-primary">Update</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default EditPegawai;
