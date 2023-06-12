
import React, { useEffect } from 'react';



import Main from '../components/main/item/Main';
import MyServiceItem from '../components/myService/item/MyServiceItem';

import React from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
// import { Link } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import RegForm from '../components/authentication/item/RegForm';
import LogForm from '../components/authentication/item/LogForm';
import { userCheck } from '../components/authentication/authSlice/authSlice';
import { RootState, useAppDispatch } from '../store';
import { getAllServices } from '../components/servicesFoMee/servicesSlice/servicesSlice';
import { useSelector } from 'react-redux';
import ServicesForMeeList from '../components/servicesFoMee/items/ServicesForMeeList';
import AboutServiceForMee from '../components/servicesFoMee/items/AboutServiceForMee';


function App(): JSX.Element {

  const dispatch = useAppDispatch();

useEffect(  () => {
dispatch(userCheck());
dispatch(getAllServices())
}, [])



  return (
    <div className="App">

      <div className="App">
        <MyServiceItem />
      </div>


      <Navbar />
      <Routes>
        <Route path="/registration" element={<RegForm />} />
        <Route path="/login" element={<LogForm />} />
        <Route path='/servicesForMee' element={<ServicesForMeeList/>}/>
        <Route path='/servicesForMee/:service_id' element={<AboutServiceForMee/>}/>
      </Routes>

    </div>
  );
}

export default App;
