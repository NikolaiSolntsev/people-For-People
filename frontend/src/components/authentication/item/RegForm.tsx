import * as React from 'react';
import { useState } from 'react';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { userRegistration } from '../authSlice/authSlice';
import { Nav } from 'react-bootstrap';
import './LogForm.css'

function RegForm(): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, user } = useSelector((store: RootState) => store.auth);

  const registration: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (password === repeatPassword) {
      dispatch(
        userRegistration({
          name,
          phone,
          password,
          email,
          language,
        })
      );
    }
  };
  if (user) {
    navigate('/');
  }

  return (
    <div className="reg-form back">
     
      <form className="form " onSubmit={registration}>
       <p className="form-title">Sign up </p>
        <div className="input-container">
          <input type="text"  name='name' placeholder="Enter name"  onChange={(e) => setName(e.target.value)}/>
          <span/>
          
      </div>
        <div className="input-container">
          <input type="float"  name='phone' placeholder="Enter phone"  onChange={(e) => setPhone(e.target.value)}/>
          <span/>
          
      </div>
      <div className="input-container">
          <input type="password" placeholder="Enter password"  name='password'  onChange={(e) => setPassword(e.target.value)}/>
        </div>
      <div className="input-container">
          <input type="password" placeholder="Repeat password"  name='repeatPassword' onChange={(e) => setRepeatPassword(e.target.value)}/>
        </div>
      <div className="input-container">
          <input type="email" placeholder="Enter email"  name='email'  onChange={(e) => setEmail(e.target.value)}/>
        </div>
      <div className="input-container">
          <select className="select-container" value={language} placeholder="Choise language"    onChange={(e) => setLanguage(e.target.value)}>
            <option value="none"> </option>
            <option className='option' value="english">english </option>
            <option value="русский">русский </option>
          </select>
        </div>
         <button type="submit" className="submit">
        Sign up
      </button>

      <p className="signin-link">
        Has you account?
        <Nav.Link>
                <Link to='/login'>Sign in</Link>
              </Nav.Link>
      </p>
   </form>
      <h2>{error}</h2>
    </div>
  );
}

export default RegForm;
