import React from 'react';
import { useNavigate } from 'react-router-dom';
function Navbar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem('isLoggedIn');
        navigate('/login');
    };
  return (
    <div>
        <div className="container">
            <div className="p-3">sales@domain.com</div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                
                    <a className="navbar-brand" href="#">
                        <img src="../rullystudio-light.png" style={{ width : '100px' }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="/pegawai">Pegawai</a>
                            </li>
                        </ul>
                        <span className="navbar-text">
                            <button onClick={handleLogout} className="btn btn-light">Logout</button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    </div>
  );
}

export default Navbar;
