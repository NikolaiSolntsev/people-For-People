import React, { useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';
import Navibar from '../components/navbar/Navibar';
import RegForm from '../components/authentication/item/RegForm';
import LogForm from '../components/authentication/item/LogForm';
import { userCheck } from '../components/authentication/authSlice/authSlice';
import { getAllServices } from '../components/servicesFoMee/servicesSlice/servicesSlice';
import ServicesForMeeList from '../components/servicesFoMee/items/ServicesForMeeList';
import AboutServiceForMee from '../components/servicesFoMee/items/AboutServiceForMee';
import Profile from '../components/account/item/Profile';
import MyServiceList from '../components/myService/item/MyServiceList';
import Account from '../components/account/items/Account';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useAppDispatch } from '../store';
import History from '../components/history/item/History';
// import Slider from '../components/slider/Slider';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userCheck());
    dispatch(getAllServices());
  }, []);

  // useEffect(() => {
  //   fetch('/api/deals', { method: 'DELETE' });
  // }, []);

  return (
    <div className='App'>
      <Navibar />
      {/* <Slider /> */}

      <Routes>
        <Route path='/history' element={<History />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/myServices' element={<MyServiceList />} />
        <Route path='/registration' element={<RegForm />} />
        <Route path='/login' element={<LogForm />} />
        <Route path='/servicesForMee' element={<ServicesForMeeList />} />
        <Route
          path='/servicesForMee/:service_id'
          element={<AboutServiceForMee />}
        />
        <Route path='/account/:user_id' element={<Account />} />
      </Routes>
      <div className='footer'><footer>&copy; Production by Cyber-DEDki, 2023</footer></div>
    </div>
          
  );
}

export default App;
