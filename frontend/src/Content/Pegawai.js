import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import { useNavigate } from 'react-router-dom';
import DetailPegawai from '../Content/DetailPegawai';

function Pegawai() {
    const [pegawai, setPegawai] = useState([]);
    const [selectedPegawai, setSelectedPegawai] = useState(null);

  const navigate = useNavigate();
  useEffect(() => {
                        fetch('http://localhost/project/webdev/pegawai') // Sesuaikan dengan path API di CodeIgniter
                        .then(response => response.json())
                        .then(data => {
                            setPegawai(data.pegawai);
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                    }, []);
    const handlePegawaiClick = selected => {
        setSelectedPegawai(selected);
        };
 
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 mb-2 mt-3">
                    <h4>Daftar Pegawai</h4>
                </div>
                <div className="col-lg-6 col-sm-12 mb-2 mt-3 text-end">
                    <a href="/formpegawai" className="btn btn-primary">Add New</a>
                </div>
            </div>
            <table className="table table-bordered table-stripped">
                <thead>
                    <tr>
                        <th>
                           ID
                        </th>
                        <th>
                            Foto
                        </th>
                        <th>
                            Nama
                        </th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                {pegawai.map(pegawai => (
                    <tr key={pegawai.id_pegawai}>
                        <td className="text-center" style={{ width : '3%',  }}>{pegawai.id_pegawai}</td>
                        <td className="text-center" style={{ width : '5%' }}>
                            <img src={`http://localhost/project/webdev/uploads/${pegawai.foto}`} style={{ width : '100px', height : '100px', borderRadius : '50%' }} />    
                        </td>
                        <td>{pegawai.nama}</td>
                        <td style={{ width : '15%' }}>
                            <Link to={`/pegawai/detail/${pegawai.id_pegawai}`}>
                                Detail
                            </Link>
                            <span> | </span>
                            <Link to={`/pegawai/edit/${pegawai.id_pegawai}`}>
                                Edit
                            </Link>
                            <span> | </span>
                            <Link to={`/pegawai/hapus/${pegawai.id_pegawai}`}>
                                Hapus
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            
      {/* Detail Pegawai */}
      {selectedPegawai && <DetailPegawai pegawai={selectedPegawai} />}
        </div>
        
    </div>
  );
}

export default Pegawai;
