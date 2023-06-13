import React from 'react';
import './Navibar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { RootState, useAppDispatch } from '../../store';
import { userLogout } from '../authentication/authSlice/authSlice';

function Navibar(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();
  const logout = (): void => {
    dispatch(userLogout());
  };

  return (
    <Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
      <Navbar.Brand className='ml-7'>People for</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse className='justify-content-end'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
          {user?.id ? (
            <>
              <div> {user && `Привет ${user.name}!`}</div>
              <Nav.Link>
                <Link to='/profile'>Profile</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/servicesForMee'>My Services</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to={`/account/${user.id}`}>Account</Link>
              </Nav.Link>

              <Button
                variant='primary'
                type='button'
                onClick={logout}
                className='mr-2'>
                <Link to='/'>Logout</Link>
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
                <Link to='/registration'>Sign up</Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  /* <div className='links'>
        {user?.id ? (
          <>
            <div> {user && `Привет ${user.name}!`}</div>
            <div>
              <Link to='/'>Home</Link>
            </div>
            <div>
              <Link to='/profile'>Profile</Link>
            </div>
            <div>
              <Link to='/servicesForMee'>My Services</Link>
            </div>
            <div>
              <Link to={`/account/${user.id}`}>Account</Link>
            </div>
            <div>
              <button type='button' onClick={logout}>
                <Link to='/'>Logout</Link>
              </button>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to='/login'>Sign in</Link>
            </div>
            <div>
              <Link to='/registration'>Sign up</Link>
            </div>
          </>
        )}
      </div> */
}

export default Navibar;
