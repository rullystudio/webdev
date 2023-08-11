import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar2 from '../Component/Navbar2';

function HapusPegawai({ pegawai }) {
    const { id } = useParams();
    const [result, setPegawai] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
                        fetch('http://localhost/project/webdev/pegawai/delete/'+id) // Sesuaikan dengan path API di CodeIgniter
                        .then(response => response.json())
                        .then(data => {
                            //setPegawai(data.result);
                            navigate('/pegawai'); 
                        })
                        .catch(error => {
                            console.error('Error fetching data:', error);
                        });
                    }, [id]);
  
    return (
        <div>
            
        </div>
    );
}

export default HapusPegawai;
