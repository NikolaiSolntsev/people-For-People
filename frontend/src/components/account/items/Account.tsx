import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import AccountService from './AccountService';

function Account(): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const { myServices } = useSelector((store: RootState) => store.allServices);

  const services = myServices.filter(
    (service) => service.seller_id === user?.id
  );

  return (
    <div>
      <h1>это ваш аккаунт. ниже услуги, которые вы готовы предоставлять.</h1>
      {services.map((service) => (
        <AccountService key={service.id} service={service} />
      ))}
    </div>
  );
}

export default Account;
