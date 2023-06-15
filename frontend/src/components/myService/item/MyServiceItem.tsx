import React, { useEffect } from 'react';
import { MyService } from '../type/MyService';
import { useAppDispatch } from '../../../store';
import { myServicesInit, serviceDel } from '../slice/myServicesSlice';

function MyServiceItem({ myService }: { myService: MyService }): JSX.Element {
  const dispatch = useAppDispatch();



  const delServiceItem = ():void => {
    dispatch(serviceDel(myService.id))

  // const editServiceItem = ():void => {
  //   fetch(`/api/servicesForMee/${myService.id}`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => dispatch(data));
  // };

  }
  return (
    <div
      className="serviceItem-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '400px',
        height: '400px',
      }}
    >
      <img src={myService.image} alt="hallo" />
      <h2>{`Описание: ${myService.description}`}</h2>
      <h3>{`Стоимость: ${myService.price}`}</h3>
      {/* <button type="button" onClick={editServiceItem}>
        Редактировать
      </button> */}
      <button type="button" onClick={delServiceItem}>
        Удалить
      </button>
    </div>
  );
}

export default MyServiceItem;
