import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { userLogout } from '../authentication/authSlice/authSlice';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();
  const logout = (): void => {
    dispatch(userLogout());
  };

  return (
    <div className="navbar">
      <div>красивое название </div>
      <div className="links">
        {user?.id ? (
          <>

            <div className='link'> {user && `Привет ${user.name}!`}</div>
            <div className='link'>
              <Link to="/">Hа главную</Link>
            </div>
            <div className='link'>
              <Link to="/profile">Profile</Link>

            </div>
            <div className='link'>
              <Link to="/servicesForMee">услуги для меня</Link>
            </div>
            <div className='link'> 
              <Link to={`/account/${user.id}`}>мои услуги</Link>
            </div>
            <div>
              <button type="button" className='logout' onClick={logout}>
                <Link to="/">Выйти</Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='link'>
              <Link to="/login">Войти</Link>
            </div>
            <div className='link'>
              <Link to="/registration">Зарегистрироваться</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
