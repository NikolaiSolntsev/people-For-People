import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getAbout } from '../functions';
import { MyService } from '../../myService/type/MyService';

function ServiceForMeeItem({ service }: { service: MyService }): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        height: '400px',
      }}>
      <h1>{`location: ${service.City.cityName}`}</h1>
      <h2>{`service: ${service.Service.serviceName}`}</h2>
      <h3>{`from user: ${service.User.name}`}</h3>
      <h5>{`price: ${service.price}`}</h5>
      <button type='button' onClick={() => getAbout({ service, navigate })}>
        about
      </button>
    </div>
  );
}

export default ServiceForMeeItem;
