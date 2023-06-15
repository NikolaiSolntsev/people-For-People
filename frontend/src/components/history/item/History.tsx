import React, { useEffect, useState } from 'react';
import DealItemBuyer from '../../deal/item/DealItemBuyer';
import DealItemSaller from '../../deal/item/DealItemSaller';
import { Deal } from '../../deal/type/Deal';
import '../History.css';

function History(): JSX.Element {
  const [byDeal, setByDeal] = useState([]);
  const [seleDeal, setSeleDeal] = useState([]);

  useEffect(() => {
    getbyDeal();
    getseleDeal();
  }, []);

  function getbyDeal(): void {
    fetch('/api/allDeal')
      .then((res) => res.json())
      .then((data) => {
        setByDeal(data.byDeal);
      });
  }

  function getseleDeal(): void {
    fetch('/api/allDeal/seller')
      .then((res) => res.json())
      .then((data) => {
        setSeleDeal(data.seleDeal);
      });
  }
  console.log(seleDeal);
  return (
    <div className='histoty-box'>
      <div>
        <h1>Мои покупки</h1>
        {byDeal.map((el: Deal) => (
          <DealItemBuyer key={el.id} deal={el} setByDeal={setByDeal} />
        ))}
      </div>
      <div>
        <h1>Мои продажи</h1>
        {seleDeal.map((el: Deal) => (
          <DealItemSaller key={el.id} deal={el} setSeleDeal={setSeleDeal} />
        ))}
      </div>
    </div>
  );
}

export default History;
