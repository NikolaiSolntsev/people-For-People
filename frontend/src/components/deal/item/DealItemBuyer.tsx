/* eslint-disable arrow-body-style */
import React from 'react';
import { MyService } from '../../myService/type/MyService';
import { Deal } from '../type/Deal';

function DealItemBuyer({
  deal,
  setByDeal,
}: {
  deal: Deal;
  setByDeal: (value: any) => void;
}): JSX.Element {
  function dealStatus(arg: string): void {
    if (arg === 'arhiv' && deal.status !== 'seller arhiv') {
      arg = 'byuer arhiv';
    }
    fetch(`/api/deals/${deal.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ status: arg }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.m === 'ok' && (arg === 'arhiv' || arg === 'byuer arhiv')) {
          setByDeal((prev: any) =>
            prev.filter((el: Deal) => el.id !== deal.id)
          );
        } else if (data.m === 'ok') {
          deal = { ...deal, status: arg };
        }
      });
  }

  function dealConfirm(): void {
    fetch(`api/deals/confirm/by/${deal.id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ buyerKey: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.m === 'ok') {
          setByDeal((prev: Deal[]) => {
            return prev.map((el) => {
              if (el.id === deal.id) {
                el.buyerKey = true;

                console.log('HERRR');
              }
              return el;
            });
          });
        }
      });
  }
  console.log(deal, 'byuerrrrrrrr');

  return (
    <div>
      <h2>{`Наименование услуги: ${deal.MyService.Service.serviceName}`}</h2>
      <h3>{`От продавца: ${deal.MyService.User.name}`}</h3>
      <h3>{`Сумма сделки ${deal.MyService.price}`}</h3>
      {deal.status === 'create' && (
        <h3>Ожидается подтверждение сделки от продовца</h3>
      )}
      {deal.status === 'right' && !deal.buyerKey && (
        <div>
          <h3>Ваша сделка подтверждена продовцом</h3>
          <button type='button' onClick={dealConfirm}>
            {' '}
            Подтвердить получение услуги
          </button>
        </div>
      )}
      {(deal.status === 'complete' || deal.buyerKey) && (
        <div>
          <h3>Ваша сделка успешно завершена</h3>
          {/* <button type='button'>В архив</button> */}
        </div>
      )}
      {(deal.status === 'reject' ||
        deal.status === 'seller arhiv' ||
        deal.buyerKey) && (
        <div>
          {(deal.status === 'reject' ||
            (deal.status === 'seller arhiv' && !deal.buyerKey)) && (
            <h3>
              Ваша сделка отклонена продовцом, для уточнения свяжитесь с
              продовцом
            </h3>
          )}
          <button type='button' onClick={() => dealStatus('arhiv')}>
            В архив
          </button>
        </div>
      )}
    </div>
  );
}

export default DealItemBuyer;
