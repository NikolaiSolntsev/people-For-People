import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { changeUser } from '../../authentication/authSlice/authSlice';
import './Profile.css';

function Profile(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const [language, setLanguage] = useState(user?.language);
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [photo, setPhoto] = useState(user?.photo);
  const [form, setForm] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      setName(user?.name);
      setEmail(user.email);
      setPhoto(user.photo);
      setLanguage(user.language);
    }
  }, [user]);

  const saveChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    dispatch(
      changeUser({
        id: user?.id,
        name,
        language,
        email,
        photo,
      })
    );
  };

  return (
    <div>
      {user?.language === 'русский' ? (
        <>
          <h1>Ваш Профиль</h1>
          <div className="profile">
            <div className="icon">
              <div>
                <div className='score'>
                  <h5>{user?.score}</h5>
                </div>
                <div className="avatar ava">
                  <img src={user?.photo} alt="img" />
                </div>
                {!form && (
                  <button
                    className="save-btn saveBTN"
                    type="button"
                    onClick={() => setForm(true)}
                  >
                    изменить профиль
                  </button>
                )}
              </div>
              <div className="infoGroup">
                <div className="buttonGroup">
                  <div>
                    <button className="btn" type="button">
                      <Link to="/myServices">
                        <h3>добавить услугу</h3>
                      </Link>
                    </button>
                  </div>
                  <div>
                    <button className=" btn" type="button">
                      <Link to="/history">
                        <h3>история заказов</h3>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {form && (
              <>
                {' '}
                <form className="form " onSubmit={saveChange}>
                  <p className="form-title">изменить профиль</p>
                  <div className="input-container">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      onChange={(e) => setPhoto(e.target.value)}
                      value={photo}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="input-container">
                    <select
                      className="select-container"
                      onChange={(e) => setLanguage(e.target.value)}
                      value={language}
                    >
                      <option value="none"> </option>
                      <option className="option" value="english">
                        english{' '}
                      </option>
                      <option value="русский">русский </option>
                    </select>
                  </div>
                  <button type="submit" className="save-btn">
                    сохранить
                  </button>{' '}
                  <button
                    onClick={() => setForm(false)}
                    type="button"
                    className="save-btn"
                  >
                    закрыть
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h1>Your Profile</h1>
          <div className="profile">
            <div className="icon">
              <div>
              <div className='score'>
                  <h5>{user?.score}</h5>
                </div>
                <div className="avatar ava">
                  <img src={user?.photo} alt="img" />
                </div>
                {!form && (
                  <button
                    className="save-btn saveBTN"
                    type="button"
                    onClick={() => setForm(true)}
                  >
                    change profile
                  </button>
                )}
              </div>
              <div className="infoGroup">
                <div className="buttonGroup">
                  <div>
                    <button className="btn" type="button">
                      <Link to="/myServices">
                        <h3>add a service</h3>
                      </Link>
                    </button>
                  </div>
                  <div>
                    <button className=" btn" type="button">
                      <Link to="/history">
                        <h3>history of orders</h3>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {form && (
              <>
                {' '}
                <form className="form " onSubmit={saveChange}>
                  <p className="form-title">change profile</p>
                  <div className="input-container">
                    <input
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      onChange={(e) => setPhoto(e.target.value)}
                      value={photo}
                    />
                  </div>
                  <div className="input-container">
                    <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="input-container">
                    <select
                      className="select-container"
                      onChange={(e) => setLanguage(e.target.value)}
                      value={language}
                    >
                      <option value="none"> </option>
                      <option className="option" value="english">
                        english{' '}
                      </option>
                      <option value="русский">русский </option>
                    </select>
                  </div>
                  <button type="submit" className="save-btn">
                    save
                  </button>{' '}
                  <button
                    onClick={() => setForm(false)}
                    type="button"
                    className="save-btn"
                  >
                    close
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
