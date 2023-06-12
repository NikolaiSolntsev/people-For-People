import React, { useEffect, useState } from 'react';
import { RootState, useAppDispatch } from '../../../../store';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { changeUser } from '../../authSlice/authSlice';

function Profile(): JSX.Element {
  const [language, setLanguage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();


  const saveChange:React.FormEventHandler<HTMLFormElement> =(e)=>{
e.preventDefault();
dispatch(changeUser({name:name, newPassword:newPassword, password:oldPassword, language: language, email: email}))
  }

 

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4>мои услуги</h4>
      <div className="profile">
        <div>
          <button type="button">
            <Link to="/myServices">мои услуги</Link>
          </button>
        </div>
        <div>
          <button type="button">
            <Link to="/history">история заказов и услуг</Link>
          </button>
        </div>
      </div>

      <form onSubmit={saveChange}>
        <div>
          <img src={user?.photo} alt="image" />
        </div>
<div> your phone:  {user?.phone}</div>
        <br />
        <br />
        <label>
          name
          <input
            placeholder={user?.name}
            onChange={(e) => setName(e.target.value)}
            value={user?.name}
          />
        </label><br/>
        <label>
          email
          <input
            placeholder={user?.email}
            onChange={(e) => setEmail(e.target.value)}
            value={user?.email}
          />
        </label>
        <InputLabel id="demo-simple-select-required-label">
          изменить язык
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={language}
          label="Выберите язык *"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="русский">русский</MenuItem>
          <MenuItem value="english">english</MenuItem>
        </Select><br/>
        <label>
          edit password
          <input placeholder="old password" onChange={(e) => setOldPassword(e.target.value)}
            />
          <br />
          <input placeholder="new password" onChange={(e) => setNewPassword(e.target.value)}
            />
        </label>
        <button type='submit'>save</button>
      </form>
    </div>
  );
}

export default Profile;
