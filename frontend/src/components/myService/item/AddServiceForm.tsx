import React, { useEffect, useRef, useState } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { serviceAdd } from '../slice/myServicesSlice';
import { countryInit } from '../slice/countriesSlice ';
import { citiesInit } from '../slice/citiesSlice';
import { getServicesForMee } from '../../servicesFoMee/functions';
import { nameServicesInit } from '../slice/nameServicesSlice';

function AddServiceForm(): JSX.Element {
  const { countries } = useSelector((store: RootState) => store.countries);
  const { nameServices } = useSelector((store: RootState) => store.nameServices);
  const { cities } = useSelector((store: RootState) => store.allCities);
  const {error}=useSelector((store: RootState) => store.myServices)

  const nameServicesInput = useRef<HTMLSelectElement>(null);
  const countryInput = useRef<HTMLSelectElement>(null);
  const cityInput = useRef<HTMLSelectElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
 
  const priceInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  

  useEffect(()=>{
 dispatch(nameServicesInit());
//  dispatch(citiesInit(1));

  },[]);
  useEffect(() => {
    dispatch(countryInit());
  }, [ dispatch]);
  console.log('все заполнено!!!!!!!!!!!!!!!!!!!!!!!!!!',error,'!!!!!!');

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
    <div className="add-service-form">
      <form onSubmit={addForm}>
       
          <select  ref={nameServicesInput} required>
              {nameServices.map((myserv)=> <option value={myserv.id}> {myserv.serviceName}</option>)}
          </select><br/>
          <select onChange={(e)=> dispatch(citiesInit(Number(e.target.value)))} ref={countryInput} required>
          <option value='none'>choice country</option>
              {countries.map((country)=> <option value={country.id}> {country.countryName}</option>)}
          </select><br/>
          <select ref={cityInput} required>
            <option value='none'>choice city </option>
              {cities.map((city)=> <option  value={city.id}>{city.cityName}</option>)}
          </select><br/>
          <label>Добавить фото:<br/>  <input
          
            type="file"
            className="service-image-input"
            placeholder="Загрузите фото"
            ref={imageInput}
            multiple
            required
          /></label><br/>
       
          {/* input price */}
          <input
            required
            id="outlined-required"
            type="text"
            name="price"
            placeholder="Напишите стоимость"
            ref={priceInput}
            // value="qwerty"
          /><br/>
          {/* input description */}
          <input
            required
            id="outlined-required"
            type="text"
            name="description"
            placeholder="Напишите описание товара.услуги"
            ref={descriptionInput}
          /><br/>
       
        <button type="submit" >Добавить</button>
        {error&&<><h5>Ошибка добавления! </h5><h5>Возможно не заполнены все поля</h5></>}
      </form>
    </div>
  );
}
export default AddServiceForm;
