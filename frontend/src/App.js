import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Content/Login';
import Dashboard from './Content/Dashboard';
import Pegawai from './Content/Pegawai';
import FormPegawai from './Content/FormPegawai';
import DetailPegawai from './Content/DetailPegawai';
import EditPegawai from './Content/EditPegawai';
import HapusPegawai from './Content/HapusPegawai';

function App() {
  const isLoggedIn = sessionStorage.getItem('isLoggedIn');
  const isLogged = sessionStorage.getItem('setIsLoggedIn');

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={isLogged} />} />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/pegawai"
          element={isLoggedIn ? <Pegawai /> : <Navigate to="/login" />}
        />
        <Route
          path="/formpegawai"
          element={isLoggedIn ? <FormPegawai /> : <Navigate to="/login" />}
        />

        <Route
          path="/pegawai/detail/:id"
          element={isLoggedIn ? <DetailPegawai /> : <Navigate to="/login" />}
        />

        <Route
          path="/pegawai/edit/:id"
          element={isLoggedIn ? <EditPegawai /> : <Navigate to="/login" />}
        />

        <Route
          path="/pegawai/hapus/:id"
          element={isLoggedIn ? <HapusPegawai /> : <Navigate to="/login" />}
        />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
