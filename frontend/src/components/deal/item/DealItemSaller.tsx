import React, { useState } from 'react';
import { Deal } from '../type/Deal';

function DealItemSaller({
  deal,
  setSeleDeal,
}: {
  deal: Deal;
  setSeleDeal: (value: any) => void;
}): JSX.Element {
  function dealStatus(arg: string): void {
    if (arg === 'arhiv' && deal.status !== 'byuer arhiv') {
      arg = 'seller arhiv';
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
        if (data.m === 'ok' && (arg === 'arhiv' || arg === 'seller arhiv')) {
          setSeleDeal((prev: any) =>
            prev.filter((el: Deal) => el.id !== deal.id)
          );
        } else if (data.m === 'ok') {
          deal = { ...deal, status: arg };
          setSeleDeal((prew: Deal[]) =>
            prew.map((el) => {
              if (el.id === deal.id) {
                el.status = arg;
              }
              return el;
            })
          );
        }
      });
  }

  return (
    <div>
      <h2>{`Наименование услуги: ${deal.MyService.Service.serviceName}`}</h2>
      <h3>{`От покупателя: ${deal.User?.name}`}</h3>
      <h3>{`Сумма сделки ${deal.MyService.price}`}</h3>
      {deal.status === 'create' && (
        <div>
          <h3>Покупатель ожидает подтверждения сделки</h3>
          <button type='button' onClick={() => dealStatus('right')}>
            {' '}
            Подтвердить услугу
          </button>
          <button type='button' onClick={() => dealStatus('reject')}>
            Отклонить запрос
          </button>
        </div>
      )}
      {deal.status === 'reject' && (
        <div>
          <h3>Покупка отклонена</h3>
          <button type='button' onClick={() => dealStatus('arhiv')}>
            {' '}
            Отправить в архив
          </button>
        </div>
      )}
    </div>
  );
}

export default DealItemSaller;
