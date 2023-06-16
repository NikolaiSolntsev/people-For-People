import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MyService } from '../../myService/type/MyService';
import { getAbout } from '../functions';
import './ServiceForMeeItem.css';

function ServiceForMeeItem({ service }: { service: MyService }): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="serviceItem-card-all">
      <div className="serviceItem-card-details-all">
        <div className="img-container">
          <img
            className="img-service-all"
            src={service.image}
            alt={service.description}
          />
        </div>
        <div className='service-all-info'><h5>location: </h5>
        <h4>{service.City.cityName}</h4>
        <h5>
          service:<h3>{service.Service.serviceName} </h3>
        </h5>
        <h5>
          from user: <h3>{service.User.name}</h3>
        </h5>
        <h5>price:</h5> <h4>{service.price}</h4></div>
        
      </div>
      <button
        className="about-btn"
        onClick={() => getAbout({ service, navigate })}
        type="button"
      >
       About
      </button>
    </div>
  );
}

export default ServiceForMeeItem;
