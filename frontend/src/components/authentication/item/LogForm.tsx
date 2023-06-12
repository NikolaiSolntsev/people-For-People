import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { selectLoginFormError } from '../selectors';
import { userLogin, resetLoginFormError } from '../authSlice/authSlice';

function LogForm(): JSX.Element {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const error = useSelector(selectLoginFormError);
  const { user } = useSelector((store: RootState) => store.auth);

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

  const handlePhoneChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPhone(event.target.value);
      // 332 очищаем ошибку
      dispatch(resetLoginFormError());
    },
    [dispatch]
  );

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
      // 332 очищаем ошибку
      dispatch(resetLoginFormError());
    },
    [dispatch]
  );

  return (
    <div>
      <form className="login-form" onSubmit={login}>
        <label>
          Введите номер вашего телефона:
          <input
            type="text"
            name="phone"
            placeholder="Введите номер Вашего телефона"
            onChange={handlePhoneChange}
          />
        </label>
        <label>
          Введите пароль:
          <input
            type="text"
            name="password"
            placeholder="Введите пароль"
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Войти</button>
      </form>
      <h2>{error}</h2>
    </div>
  );
}

export default LogForm;
