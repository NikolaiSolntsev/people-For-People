import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import { Link } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import RegForm from '../components/authentication/item/RegForm';
import LogForm from '../components/authentication/item/LogForm';

function App(): JSX.Element {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/registration" element={<RegForm />} />
        <Route path="/login" element={<LogForm />} />
      </Routes>
    </div>
  );
}

export default App;
