import React from 'react';
import { MyService } from '../../myService/type/MyService';

function AccountService({ service }: { service: MyService }): JSX.Element {
  return (
    <div>
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
      </div>
    </div>
  );
}

export default AccountService;
