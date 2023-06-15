import React from 'react';
import { Deal } from '../type/Deal';

function DealItemSaller({ deal }: { deal: Deal }): JSX.Element {
  return (
    <div>
      <h2>{`Наименование услуги: ${deal.MyService.Service.serviceName}`}</h2>
      <h3>{`От покупателя: ${deal.User?.name}`}</h3>
      <h3>{`Сумма сделки ${deal.MyService.price}`}</h3>
      {deal.status === 'create' && (
        <div>
          <h3>Покупатель ожидает подтверждения сделки</h3>
          <button type='button'> Подтвердить услугу</button>
          <button type='button'> Отклонить запрос</button>
        </div>
      )}
      {deal.status === 'reject' && (
        <div>
          <h3>Покупка отклонена</h3>
          <button type='button'> Отправить в архив</button>
        </div>
      )}
    </div>
  );
}

export default DealItemSaller;
