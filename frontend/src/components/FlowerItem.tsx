import React from 'react';
import { useDispatch } from 'react-redux';
import { Flower } from './redux/type';

function FlowerItem({ flower }: { flower: Flower }): JSX.Element {
  const dispatch = useDispatch();
  const delFlower = (): void => {
    fetch(`/api/flowers/${flower.id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'flower/delete', payload: data }));
  };

  const check = (e: React.ChangeEvent<HTMLInputElement>): void => {
    fetch(`api/flowers/${flower.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ status: e.target.checked }),
    })
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: 'flower/update',
          payload: { id: data.id, status: data.status },
        })
      );
  };
  return (
    <div>
      <h2>{flower.name}</h2>
      <img src={flower.url} alt="url" />
      <button type="button" onClick={delFlower}>
        delete
      </button>
      <input type="checkbox" onChange={check} checked={flower.status} />
    </div>
  );
}

export default FlowerItem;
