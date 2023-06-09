import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

function Navbar(): JSX.Element {
const {user} = useSelector((store:RootState) => store.user)
  return (
    <div className="navbar">
        <div>красивое название </div>
        <div className='links'>
      {!user? (<><div >
        <Link to="/login">Loga</Link>
      </div>
      <div>
        <Link to="/registration">Rega</Link>
      </div></>):(<>
       <div>
        <Link to="/">Hа главную</Link>
      </div>
      <div>
        <Link to="/">Мои услуги</Link>
      </div>
      <div>
        <Link to="/">Logout</Link>
      </div></>)}
      </div>
    </div>
  );
}

export default Navbar;
