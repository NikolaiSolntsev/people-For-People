import React, { useRef } from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import { serviceAdd } from '../slice/myServicesSlice';

function AddServiceForm(): JSX.Element {
  const { countries } = useSelector((store: RootState) => store.countries);
  const { myServices } = useSelector((store: RootState) => store.allServices);
  const { cities } = useSelector((store: RootState) => store.allCities);

  const serviceInput = useRef<HTMLInputElement>(null);
  const countryInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  const imageInput = useRef<HTMLInputElement>(null);
  const videoInput = useRef<HTMLInputElement>(null);
  const priceInput = useRef<HTMLInputElement>(null);
  const descriptionInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  console.log(priceInput.current?.value);

  const addForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      serviceInput.current?.value &&
      countryInput.current?.value &&
      cityInput.current?.value &&
      imageInput.current?.files?.length &&
      videoInput.current?.files?.length &&
      priceInput.current?.value &&
      descriptionInput.current?.value
    ) {
      const service = serviceInput.current.value;
      const country = countryInput.current.value;
      const city = cityInput.current.value;
      const image = imageInput.current.files;
      const video = videoInput.current.files;
      const price = priceInput.current.value;
      const description = descriptionInput.current.value;

      const formData = new FormData();
      formData.append('service', service)
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
        {/* input myService */}
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={myServices}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="myServices"
              ref={serviceInput}
            />
          )}
        />
        {/* input country */}
        <div className="country-input">
          <Autocomplete
            id="country-select-demo"
            sx={{ width: 300 }}
            options={countries}
            autoHighlight
            getOptionLabel={(option) => option.countryName}
            ref={countryInput}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={`https://flagcdn.com/w20/${option.countryCode.toLowerCase()}.png`}
                  srcSet={`https://flagcdn.com/w40/${option.countryCode.toLowerCase()}.png 2x`}
                  alt=""
                />
                {option.countryName} ({option.countryCode}) +{option.phoneCode}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: 'new-password', // disable autocomplete and autofill
                }}
              />
            )}
          />
          {/* input city */}
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="city"
                ref={cityInput}
              />
            )}
          />
          {/* input image */}
          <input
            type="file"
            className="service-image-input"
            placeholder="Загрузите фото"
            ref={imageInput}
            multiple
          />
          {/* input video */}
          <input
            type="file"
            className="service-video-input"
            placeholder="Загрузите видео"
            ref={videoInput}
            multiple
          />
          {/* input price */}
          <TextField
            required
            id="outlined-required"
            type="text"
            name="price"
            placeholder="Напишите стоимость"
            ref={priceInput}
            value="qwerty"
          />
          {/* input description */}
          <TextField
            required
            id="outlined-required"
            type="text"
            name="description"
            placeholder="Напишите описание товара.услуги"
            ref={descriptionInput}
          />
        </div>
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
export default AddServiceForm;
