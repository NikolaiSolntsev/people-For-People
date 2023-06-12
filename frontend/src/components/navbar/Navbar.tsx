import React, { useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { getUser, userLogout } from '../authentication/authSlice/authSlice';

function Navbar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const logout = (): void => {
    dispatch(userLogout());
  };

  // console.log(user?.language, 'rrrrrrrrrrrrrrrr');
  console.log(user?.name);
  return (
    <div className="navbar">
      <div>красивое название </div>
      <div className="links">
        {user?.id ? (
          <>
            <div> {user && `Привет ${user.name}!`}</div>
            <div>
              <Link to="/">Hа главную</Link>
            </div>
            <div>
              <Link to="/">Мои услуги</Link>
            </div>
            <div>
              <button type="button" onClick={logout}>
                <Link to="/">Выйти</Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/auth/login">Войти</Link>
            </div>
            <div>
              <Link to="/auth/registration">Зарегистрироваться</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
