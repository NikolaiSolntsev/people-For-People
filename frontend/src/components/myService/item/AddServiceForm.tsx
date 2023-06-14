import React, { useEffect, useRef } from 'react';
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

  const nameServicesInput = useRef<HTMLSelectElement>(null);
  const countryInput = useRef<HTMLSelectElement>(null);
  const cityInput = useRef<HTMLSelectElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const videoInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  

  useEffect(()=>{
 dispatch(nameServicesInit())
  },[]);
  useEffect(() => {
    dispatch(countryInit());
  }, [ dispatch]);
 

   const addForm = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
   console.log(nameServicesInput.current?.value,'nameServicesInput.current');
   console.log(countryInput.current?.value,'countryInput.current?.value');
   console.log(cityInput.current?.value,'cityInput.current?.value');
   console.log(imageInput.current?.files?.length,'imageInput.current?.files?.length');
   console.log(videoInput.current?.files?.length,'videoInput.current?.files?.length');
   console.log(priceInput.current?.value,'priceInput.current?.value');
   console.log(descriptionInput.current?.value,'descriptionInput.current?.value');
   
    if (
      nameServicesInput.current?.value &&
      countryInput.current?.value &&
      cityInput.current?.value &&
      imageInput.current?.files?.length &&
      videoInput.current?.files?.length &&
      priceInput.current?.value &&
      descriptionInput.current?.value
    ) {
      const service = nameServicesInput.current.value;
      const country = countryInput.current.value;
      const city = cityInput.current.value;
      const image = imageInput.current.files;
      const video = videoInput.current.files;
      const price = priceInput.current.value;
      const description = descriptionInput.current.value;

      const formData = new FormData();
      formData.append('service', service);
      formData.append('country', country);
      formData.append('city', city);
      for (const key in image) {
        formData.append('image', image[key]);
      }
      for (const key in video) {
        formData.append('video', video[key]);
      }
      formData.append('price', price);
      formData.append('description', description);

      dispatch(serviceAdd(formData));
    }
  };

  return (
    <div className="add-service-form">
      <form onSubmit={addForm}>
       
          <select  ref={nameServicesInput}>
              {nameServices.map((myserv)=> <option value={myserv.id}> {myserv.serviceName}</option>)}
          </select><br/>
          <select onChange={(e)=> dispatch(citiesInit(Number(e.target.value)))} ref={countryInput}>
              {countries.map((country)=> <option value={country.id}> {country.countryName}</option>)}
          </select><br/>
          <select ref={cityInput} >
              {cities.map((city)=> <option value={city.id}>{city.cityName}</option>)}
          </select><br/>
          <label>Добавить фото:<br/>  <input
            type="file"
            className="service-image-input"
            placeholder="Загрузите фото"
            ref={imageInput}
            multiple
          /></label><br/>
          {/* input video */}
         <label>Добавить видео:<br/> <input
            type="file"
            className="service-video-input"
            placeholder="Загрузите видео"
            ref={videoInput}
            multiple
          /></label> <br/>
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
       
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
export default AddServiceForm;
