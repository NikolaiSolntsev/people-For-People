import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { MyService } from '../../myService/type/MyService';
import { Service } from '../../servicesFoMee/types/Service';
import './FotoList.css';

function FotoList(): JSX.Element {
  const arr = useSelector((store: RootState) => store.allServices);
  console.log(arr.myServices);

  return (
    <div className='fotoList-box' style={{ marginTop: '0px' }}>
      {arr.myServices.map((el: MyService) => {
        let x = Math.floor(Math.random() * 100);
        let y = Math.floor(Math.random() * 100);
        const xpn = Math.floor(Math.random() * 2);
        const ypn = Math.floor(Math.random() * 2);
        xpn ? (x = -x) : false;
        ypn ? (y = -y) : false;

        return (
          <img
            style={{
              marginLeft: `${x}px`,
              marginTop: `${y}px`,
              maxHeight: '700px',
              maxWidth: '500px',
            }}
            key={el.id}
            src={el.image}
            alt='img'
          />
        );
      })}
    </div>
  );
}

export default FotoList;
