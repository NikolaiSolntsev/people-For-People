import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../../store';
import { changeUser } from '../../authSlice/authSlice';
import './Profile.css'

function Profile(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const [language, setLanguage] = useState(user?.language);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [photo, setPhoto] = useState(user?.photo);
  
  useEffect(()=>{
    if(user){
setName(user?.name)
setEmail(user.email)
setPhoto(user.photo)
setLanguage(user.language)
    }
  },[user])
  
  const dispatch = useAppDispatch();

  const saveChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    dispatch(
      changeUser({
        id:user?.id,
        name,
        language,
        email,
        photo,
      })
    );
  };

  return (
    <div className='profile' >
      <h4>мои услуги</h4>
      <div className='profile'>
        <div>
          <button className='serv' type='button'>
            <Link to='/myServices'>мои услуги</Link>
          </button>
        </div>
        <div>
          <button className='serv' type='button'>
            <Link to='/history'>история заказов и услуг</Link>
          </button>
        </div>
      </div>

      <form onSubmit={saveChange} className='formDiv'>
        <div>
          <img src={user?.photo} alt='img' />
        </div>
        <div>твои баллы:  {user?.score}</div>
        <div> your phone: {user?.phone}</div>
        <br />
        <br />
        <div className='changeForm'>
        <h5>изменить:</h5>
        <label>
          name
          <input
            // placeholder={user?.name}
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </label>
        <br />
        <label>
          photo
          <input
            // placeholder={user?.photo}
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
          />
        </label>
        <br />
        <label>
          email
          <input
            // placeholder={user?.email}
            onChange={(e) => setEmail(e.target.value)}
           value={email}
          />
        </label>
        <div> language:  {user?.language}  </div>
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
        </div>
      </form>
    </div>
  );
}

export default Profile;
