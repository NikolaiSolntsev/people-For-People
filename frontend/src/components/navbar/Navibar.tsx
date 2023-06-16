import React from 'react';
import './Navibar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, Navbar, Button } from 'react-bootstrap';
import Logo from './logo/logo.jpg';

import { RootState, useAppDispatch } from '../../store';
import { userLogout } from '../authentication/authSlice/authSlice';

function Navibar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();
  const logout = (): void => {
    dispatch(userLogout());
  };

  return (
    <Navbar collapseOnSelect expand='lg' variant='light'>
      {user?.language === 'русский' ? (
        <>
          <Navbar.Brand className='ml-7'>
            <div className='box'>
              <img src={Logo} alt='' />
            </div>
          </Navbar.Brand>
          <Navbar.Text>
            <h4>{user && `Вы вошли как  ${user.name}`}</h4>
          </Navbar.Text>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='mr-auto'>
              <Nav.Link>
                <Link to='/'>
                  <h4>На главную</h4>
                </Link>
              </Nav.Link>
              {user?.id ? (
                <>
                  {/* <Nav.Link>
                <Link to='/profile'>Profile</Link>
              </Nav.Link> */}
                  <Nav.Link>
                    <Link to='/servicesForMee'>
                      <h4>Все услуги</h4>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={`/account/${user.id}`}>
                      <h4>Профиль</h4>
                    </Link>
                  </Nav.Link>

                  <Button
                    variant='light'
                    type='button'
                    onClick={logout}
                    className='mr-2'>
                    <Link to='/'>
                      <h4>Выход</h4>
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link className='' to='/login'>
                      <h4>Войти</h4>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to='/registration'>
                      <h4>Зарегистрироваться</h4>
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
      ) : (
        <>
          {' '}
          <Navbar.Brand className='ml-7'>
            <div className='box'>
              <img src={Logo} alt='' />
            </div>
          </Navbar.Brand>
          <Navbar.Text>
            <h4>{user && `You are logged in as ${user.name}`}</h4>
          </Navbar.Text>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse className='justify-content-end'>
            <Nav className='mr-auto'>
              <Nav.Link>
                <Link to='/'>
                  <h4>Home</h4>
                </Link>
              </Nav.Link>
              {user?.id ? (
                <>
                  {/* <Nav.Link>
                <Link to='/profile'>Profile</Link>
              </Nav.Link> */}
                  <Nav.Link>
                    <Link to='/servicesForMee'>
                      <h4>Services ALL</h4>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={`/account/${user.id}`}>
                      <h4>Account</h4>
                    </Link>
                  </Nav.Link>

                  <Button
                    variant='light'
                    type='button'
                    onClick={logout}
                    className='mr-2'>
                    <Link to='/'>
                      <h4>Logout</h4>
                    </Link>
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link className='' to='/login'>
                      Sign in
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to='/registration'>
                      <h4>Sign up</h4>
                    </Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
      )}
    </Navbar>
  );
}

export default Navibar;
