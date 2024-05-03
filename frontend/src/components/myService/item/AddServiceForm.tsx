import React, { useEffect, useRef, useState } from 'react';
import './AddServiceForm.css';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { serviceAdd } from '../slice/myServicesSlice';
import { countryInit } from '../slice/countriesSlice ';
import { citiesInit } from '../slice/citiesSlice';
import { nameServicesInit } from '../slice/nameServicesSlice';

function AddServiceForm(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const { countries } = useSelector((store: RootState) => store.countries);
  const { nameServices } = useSelector(
    (store: RootState) => store.nameServices
  );
  const { cities } = useSelector((store: RootState) => store.allCities);
  const { error } = useSelector((store: RootState) => store.myServices);

  const nameServicesInput = useRef<HTMLSelectElement>(null);
  const countryInput = useRef<HTMLSelectElement>(null);
  const cityInput = useRef<HTMLSelectElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  const priceInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(nameServicesInit());
    //  dispatch(citiesInit(1));
  }, []);
  useEffect(() => {
    dispatch(countryInit());
  }, [dispatch]);

  const addForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (
      nameServicesInput.current?.value &&
      countryInput.current?.value &&
      cityInput.current?.value &&
      imageInput.current?.files?.length &&
      priceInput.current?.value &&
      descriptionInput.current?.value
    ) {
      const service = nameServicesInput.current.value;
      const country = countryInput.current.value;
      const city = cityInput.current.value;
      const image = imageInput.current.files;

      const price = priceInput.current.value;
      const description = descriptionInput.current.value;

      const formData = new FormData();
      formData.append('service', service);
      formData.append('country', country);
      formData.append('city', city);
      for (const key in image) {
        formData.append('image', image[key]);
      }

      formData.append('price', price);
      formData.append('description', description);

      dispatch(serviceAdd(formData));
    }
  };

  return (
    <div className='divAdd'>
      {user?.language === 'русский' ? (
        <div className="add-service-form">
          <form className="add-form" onSubmit={addForm}>
            <p className="form-title">Добавление услуги</p>
            <div className="choice-service input-container">
              <select ref={nameServicesInput} className="select-container" required>
                {nameServices.map((myserv) => (
                  <option value={myserv.id}> {myserv.serviceName}</option>
                ))}
              </select>
            </div>
            <div className="choice-country input-container">
              <select className="select-container"
                onChange={(e) => dispatch(citiesInit(Number(e.target.value)))}
                ref={countryInput}
                required
              >
                <option value="none">Выберите страну</option>
                {countries.map((country) => (
                  <option value={country.id}> {country.countryName}</option>
                ))}
              </select>
            </div>
            <div className="city-input input-container">
              <select className="select-container" ref={cityInput} required>
                <option value="none">Выберите город </option>
                {cities.map((city) => (
                  <option value={city.id}>{city.cityName}</option>
                ))}
              </select>
            </div>
            <div className="image-input">
              <input
                type="file"
                // className="service-image-input"
                placeholder="Загрузите фото"
                ref={imageInput}
                multiple
                required
              />
            </div>
            <div className="price-input input-container">
              <input
                required
                id="outlined-required"
                type="text"
                name="price"
                placeholder="Напишите стоимость"
                ref={priceInput}
              />
            </div>
            <div className="description-input input-container">
              <input
                required
                id="outlined-required"
                type="text"
                name="description"
                placeholder="Напишите описание"
                ref={descriptionInput}
              />
            </div>
            <button type="submit" className="add-btn">
              Добавить услугу
            </button>
            {error && (
              <>
                <h5>Ошибка добавления! </h5>
                <h5>Возможно не заполнены все поля</h5>
              </>
            )}
          </form>
        </div>
      ) : (
        <div className="add-service-form">
          <form className="add-form" onSubmit={addForm}>
            <p className="form-title">Adding a service</p>
            <div className="choice-service input-container">
              <select ref={nameServicesInput} required>
                {nameServices.map((myserv) => (
                  <option value={myserv.id}> {myserv.serviceName}</option>
                ))}
              </select>
            </div>
            <div className="choice-country input-container">
              <select className="select-container"
                onChange={(e) => dispatch(citiesInit(Number(e.target.value)))}
                ref={countryInput}
                required
              >
                <option value="none">Choice country</option>
                {countries.map((country) => (
                  <option value={country.id}> {country.countryName}</option>
                ))}
              </select>
            </div>
            <div className="city-input input-container">
              <select className="select-container" ref={cityInput} required>
                <option value="none">Choice city </option>
                {cities.map((city) => (
                  <option value={city.id}>{city.cityName}</option>
                ))}
              </select>
            </div>
            <div className="image-input">
              <input
                type="file"
                className="service-image-input"
                placeholder="Add a photo"
                ref={imageInput}
                multiple
                required
              />
            </div>
            <div className="price-input input-container">
              <input
                required
                id="price-outlined-required"
                type="text"
                name="price"
                placeholder="Write a price"
                ref={priceInput}
              />
            </div>
            <div className="description-input input-container">
              <input
                required
                id="descriprion-outlined-required"
                type="text"
                name="description"
                placeholder="Write a description"
                ref={descriptionInput}
              />
            </div>
            <button type="submit" className="add-btn">
              Add service
            </button>
            {error && (
              <>
                <h5>Add error! </h5>
                <h5>Perhaps not all fields are filled</h5>
              </>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
export default AddServiceForm;
