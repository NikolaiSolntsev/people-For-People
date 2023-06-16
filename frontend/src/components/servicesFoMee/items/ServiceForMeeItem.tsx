import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MyService } from '../../myService/type/MyService';
import { getAbout } from '../functions';
import './ServiceForMeeItem.css';

function ServiceForMeeItem({ service }: { service: MyService }): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="serviceItem-card-all" style={{width:'300px', height:'300px', background:'#fff',position:'relative', border:'none' }}>
          <div className="img-container" style={{width:'300px', height:'300px', overflow:'hidden', color:'black', WebkitTextStroke:'0.8px #fff'}}>
          <img
            className="img-service-all"
            src={service.image}
            alt={service.description}
            style={{width:'100%', height:'100%', objectFit: 'cover' }}
          />
          <h4 className="tex" style={{width:'100%', position:'absolute', top:'220px', marginLeft:'-70px'}}>
            {service.User.name} <br /> from <br /> {service.City.cityName}
          </h4>
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
