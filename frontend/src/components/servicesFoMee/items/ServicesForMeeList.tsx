import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import ServiceForMeeItem from './ServiceForMeeItem';

function ServicesForMeeList(): JSX.Element {
  const { myServices } = useSelector((store: RootState) => store.allServices);
  // console.log(myServices);
  

  return (
    <div>
      {myServices.map((service) => (
        <ServiceForMeeItem key={service.id} service={service} />
      ))}
    </div>
  );
}

export default ServicesForMeeList;
