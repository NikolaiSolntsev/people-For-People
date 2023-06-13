import React from 'react';
import MyServiceItem from './MyServiceItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import AddServiceForm from './AddServiceForm';

function MyServiceList(): JSX.Element {
  const { myServices } = useSelector((store: RootState) => store.allServices);

  return (
    <div>
      <AddServiceForm />
      <div className="serviceItems-card">
        {myServices.map((myService) => (
          <MyServiceItem key={myService.id} myService={myService} />
        ))}
      </div>
    </div>
  );
}

export default MyServiceList;
