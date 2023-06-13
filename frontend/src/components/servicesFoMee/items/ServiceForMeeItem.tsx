
import React from "react";
import { MyService } from "../../myService/type/MyService";
import { getAbout } from "../functions";
import { useNavigate } from "react-router-dom";

function ServiceForMeeItem ({service}: {service: MyService}): JSX.Element {
const navigate = useNavigate();
    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '400px', height: '400px'}}>
<h1>{`location: ${service.City.cityName}`}</h1>
<h2>{`service: ${service.Service.serviceName}`}</h2>
<h3>{`from user: ${service.User.name}`}</h3>
<h5>{`price: ${service.price}`}</h5>
<button 
onClick={() => getAbout({service, navigate})}
type="button">about</button>
        </div>
    )
}

export default ServiceForMeeItem;

