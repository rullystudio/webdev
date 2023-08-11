import React from 'react';

import Navbar from '../Component/Navbar';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const username = sessionStorage.getItem('username');
  return (
    <div>
        <Navbar/>
        <div className="container">
          
        
          <div className="alert alert-success mt-5">
            Selamat Datang <b>{ username }</b>
            
          </div>
        </div>
        
    </div>
  );
}

export default Dashboard;
