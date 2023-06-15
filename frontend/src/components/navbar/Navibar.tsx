import React from 'react';
import './Navibar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Nav, Navbar, Button } from 'react-bootstrap';

import { RootState, useAppDispatch } from '../../store';
import { userLogout } from '../authentication/authSlice/authSlice';

function Navibar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();
  const logout = (): void => {
    dispatch(userLogout());
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    
      {user?.language === 'русский' ? (
        <>
          <Navbar.Brand className="ml-7">People for</Navbar.Brand>
          <Navbar.Text>
            <h4>{user && `Привет ${user.name}!`}</h4>
          </Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">На главную</Link>
              </Nav.Link>
              {user?.id ? (
                <>
                  {/* <Nav.Link>
                <Link to='/profile'>Profile</Link>
              </Nav.Link> */}
                  <Nav.Link>
                    <Link to="/servicesForMee">Все услуги</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={`/account/${user.id}`}>Профиль</Link>
                  </Nav.Link>

                  <Button
                    variant="light"
                    type="button"
                    onClick={logout}
                    className="mr-2"
                  >
                    <Link to="/">Выход</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link className="" to="/login">
                      Войти
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/registration">Зарегистрироваться</Link>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </>
      ) : (
        <>
          {' '}
          <Navbar.Brand className="ml-7">People for</Navbar.Brand>
          <Navbar.Text>
            <h4>{user && `Hello ${user.name}!`}</h4>
          </Navbar.Text>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              {user?.id ? (
                <>
                  {/* <Nav.Link>
                <Link to='/profile'>Profile</Link>
              </Nav.Link> */}
                  <Nav.Link>
                    <Link to="/servicesForMee">Services ALL</Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to={`/account/${user.id}`}>Account</Link>
                  </Nav.Link>

                  <Button
                    variant="light"
                    type="button"
                    onClick={logout}
                    className="mr-2"
                  >
                    <Link to="/">Logout</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link>
                    <Link className="" to="/login">
                      Sign in
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link to="/registration">Sign up</Link>
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
