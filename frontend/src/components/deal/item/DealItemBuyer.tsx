import React from 'react';
import { MyService } from '../../myService/type/MyService';
import { Deal } from '../type/Deal';

function DealItemBuyer({ deal }: { deal: Deal }): JSX.Element {
  return (
    <div>
      <h2>{`Наименование услуги: ${deal.MyService.Service.serviceName}`}</h2>
      <h3>{`От продавца: ${deal.MyService.User.name}`}</h3>
      <h3>{`Сумма сделки ${deal.MyService.price}`}</h3>
      {deal.status === 'create' && (
        <h3>Ожидается подтверждение сделки от продовца</h3>
      )}
      {deal.status === 'right' && (
        <div>
          <h3>Ваша сделка подтверждена продовцом</h3>
          <button type='button'> Подтвердить получение услуги</button>
        </div>
      )}
      {deal.status === 'reject' && (
        <div>
          <h3>
            Ваша сделка отклонена продовцом, для уточнения свяжитесь с продовцом
          </h3>
          <button type='button'>В архив</button>
        </div>
      )}
      {deal.status === 'complete' && (
        <div>
          <h3>Ваша сделка успешно завершена</h3>
          <button type='button'>В архив</button>
        </div>
      )}
    </div>
  );
}

export default DealItemBuyer;
