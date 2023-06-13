import * as React from 'react';
import { useState } from 'react';

import Select, { SelectChangeEvent } from '@mui/material/Select';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../../store';
import { userRegistration } from '../authSlice/authSlice';

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
    <div className="reg-form">
      <form onSubmit={registration}>
        <input
          type="text"
          name="name"
          placeholder="Введите ваше имя"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Введите номер Вашего телефона"
          onChange={(e) => setPhone(e.target.value)}
        />
        <input

          type="password"

          name="password"
          placeholder="Введите пароль"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input

          type="password"

          name="repeatPassword"
          placeholder="Введите еще раз"
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Введите адрес электронной почты"
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputLabel id="demo-simple-select-required-label">
          Выберите язык
        </InputLabel>
        <Select
          labelId="demo-simple-select-required-label"
          id="demo-simple-select-required"
          value={language}
          label="Выберите язык *"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <MenuItem value="">

            <em>Выберите язык</em>

          </MenuItem>
          <MenuItem value="русский">русский</MenuItem>
          <MenuItem value="english">english</MenuItem>
        </Select>
        <button type="submit">Зарегистрироваться</button>
      </form>
      <h2>{error}</h2>
    </div>
  );
}

export default RegForm;
