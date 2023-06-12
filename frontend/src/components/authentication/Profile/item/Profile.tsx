import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { changeUser } from '../../authSlice/authSlice';

function Profile(): JSX.Element {
  const [language, setLanguage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');
  

  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();

  const saveChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(
      changeUser({
        id:user?.id,
        phone: user?.phone,
        name,
        language,
        email,
        photo,
      })
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h4>мои услуги</h4>
      <div className='profile'>
        <div>
          <button type='button'>
            <Link to='/myServices'>мои услуги</Link>
          </button>
        </div>
        <div>
          <button type='button'>
            <Link to='/history'>история заказов и услуг</Link>
          </button>
        </div>
      </div>

      <form onSubmit={saveChange}>
        <div>
          <img src={user?.photo} alt='img' />
        </div>
        <div>твои баллы:  {user?.score}</div>
        <div> your phone: {user?.phone}</div>
        <br />
        <br />
        <label>
          name
          <input
            placeholder={user?.name}
            onChange={(e) => setName(e.target.value)}
            defaultValue={user?.name}
          />
        </label>
        <br />
        <label>
          photo
          <input
            placeholder={user?.photo}
            onChange={(e) => setPhoto(e.target.value)}
            defaultValue={user?.photo}
          />
        </label>
        <br />
        <label>
          email
          <input
            placeholder={user?.email}
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={user?.email}
          />
        </label>
        <InputLabel id='demo-simple-select-required-label'>
          изменить язык
        </InputLabel>
        <Select
          labelId='demo-simple-select-required-label'
          id='demo-simple-select-required'
          value={language}
          label='Выберите язык *'
          onChange={(e) => setLanguage(e.target.value)}>
          <MenuItem value=''>
            <em>None</em>
          </MenuItem>
          <MenuItem value='русский'>русский</MenuItem>
          <MenuItem value='english'>english</MenuItem>
        </Select>
        <br />
       
        <button type='submit'>save</button>
      </form>
    </div>
  );
}

export default Profile;
