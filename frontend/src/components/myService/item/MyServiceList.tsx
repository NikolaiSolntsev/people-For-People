import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import MyServiceItem from './MyServiceItem';
import { RootState, useAppDispatch } from '../../../store';
import AddServiceForm from './AddServiceForm';
import { myServicesInit } from '../slice/myServicesSlice';

function MyServiceList(): JSX.Element {
  const { myServices } = useSelector((store: RootState) => store.myServices);
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();
  console.log(myServices);

  useEffect(() => {
    dispatch(myServicesInit());
  }, [user, dispatch]);

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
