import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { userLogin } from '../authSlice/authSlice';
import './LogForm.css'
import { Nav } from 'react-bootstrap';


function LogForm(): JSX.Element {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, user } = useSelector((store: RootState) => store.auth);

  const login: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (phone && password) {
      dispatch(
        userLogin({
          phone,
          password,
        })
      );
    }
  };

  if (user) {
    navigate('/');
  }

  return (
    <div className='login-form back'>   
    <form className="form " onSubmit={login}>
       <p className="form-title">Sign in to your account</p>
        <div className="input-container">
          <input type="float"  name='phone' placeholder="Enter phone"  onChange={(e) => setPhone(e.target.value)}/>
          <span/>
          
      </div>
      <div className="input-container">
          <input type="password" placeholder="Enter password"  name='password'  onChange={(e) => setPassword(e.target.value)}/>
        </div>
         <button type="submit" className="submit">
        Sign in
      </button>

      <p className="signup-link">
        No account?
        <Nav.Link>
                <Link to='/registration'>Sign up</Link>
              </Nav.Link>
      </p>
   </form>

      <h2>{error}</h2>
    </div>
  );

}

export default LogForm;
