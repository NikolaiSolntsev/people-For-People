import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
// import { Link } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import RegForm from '../components/authentication/item/RegForm';
import LogForm from '../components/authentication/item/LogForm';
// import { getUser } from '../components/authentication/authSlice/authSlice';
// import { useAppDispatch } from '../store';

function App(): JSX.Element {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getUser());
  // }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/auth/registration" element={<RegForm />} />
        <Route path="/auth/login" element={<LogForm />} />
      </Routes>
    </div>
  );
}

export default App;
