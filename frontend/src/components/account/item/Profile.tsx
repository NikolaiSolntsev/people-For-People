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
          <h4>Ваш профиль</h4>
          <div className="profile">
            <div className="icon">
              <div className="avatar ava">
                <img src={user?.photo} alt="img" />
              </div>
              <div className="infoGroup">
                <div>
                  <h5>твои баллы: {user?.score}</h5>
                </div>
                <div>
                  <h5>твой телефон: {user?.phone}</h5>
                </div>
              </div>

              <div className="buttonGroup">
                <div>
                  <button className="btn" type="button">
                    <Link to="/myServices">добавить услугу</Link>
                  </button>
                </div>
                <div>
                  <button className=" btn" type="button">
                    <Link to="/history">история заказов</Link>
                  </button>
                </div>
              </div>
            </div>
            {!form && (
              <button
                className="save-btn"
                type="button"
                onClick={() => setForm(true)}
              >
                изменить профиль
              </button>
            )}
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
                  </button> <button onClick={()=>setForm(false)} type="button" className="save-btn">
                    закрыть
                  </button>
                </form>
              </>
            )}
          </div>
        </>
      ) : (
        <>
          <h3>your profile</h3>
          <div className="profile">
            <div className="icon">
              <div className="avatar ava">
                <img src={user?.photo} alt="img" />
              </div>
              <div className="infoGroup">
                <div>
                  <h5>your score: {user?.score}</h5>
                </div>
                <div>
                  <h5>your phone number: {user?.phone}</h5>
                </div>
              </div>

              <div className="buttonGroup">
                <div>
                  <button className="btn" type="button">
                    <Link to="/myServices">add service</Link>
                  </button>
                </div>
                <div>
                  <button className="btn" type="button">
                    <Link to="/history">history of dial</Link>
                  </button>
                </div>
              </div>
            </div>

            {!form && (
              <button
                className="save-btn"
                type="button"
                onClick={() => setForm(true)}
              >
                change profile
              </button>
            )}
            {form && (
              <form className="form " onSubmit={saveChange}>
                <p className="form-title">change profile </p>
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
                  Save
                </button> <button onClick={()=>setForm(false)} type="button" className="save-btn">
                    Close
                  </button>
              </form>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
