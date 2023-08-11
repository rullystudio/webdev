import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from '../Component/Navbar2';

function DetailPegawai({ pegawai }) {
    const { id } = useParams();
    const [result, setPegawai] = useState(null);
    
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
    return (
        <div>
            <Navbar2/>
            <div className="container">            
                <div className="row">
                    <div className="col-lg-6 col-sm-12 mb-2 mt-3">
                        <h4>Detail Pegawai</h4>
                    </div>
                    <div className="col-lg-6 col-sm-12 mb-2 mt-3 text-end">
                        <a href="/pegawai" className="btn btn-primary">Kembali</a>
                    </div>
                    <div className="col-lg-12">
                        <p>
                            ID Pegawai: { result['id_pegawai'] }
                        </p>
                        <p>
                            Nama Pegawai: { result['nama'] }
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default DetailPegawai;
