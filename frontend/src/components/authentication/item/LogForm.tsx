
import React from 'react';


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { userLogin } from '../authSlice/authSlice';

function LogForm(): JSX.Element {
  const [name, setName] = useState('');
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
          name,
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
    <div>
      <form className="login-form" onSubmit={login}>
        <label>
          Введите Ваше имя:
          <input
            type="text"
            name="name"
            placeholder="Введите Ваше имя"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Введите номер вашего телефона:
          <input
            type="text"
            name="phone"
            placeholder="Введите номер Вашего телефона"
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label>
          Введите пароль:
          <input
            type="password"
            name="password"
            placeholder="Введите пароль"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
      <h2>{error}</h2>
    </div>
  );

}

export default LogForm;
