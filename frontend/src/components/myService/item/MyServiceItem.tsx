import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MyService } from '../type/MyService';
import { RootState, useAppDispatch } from '../../../store';
import { serviceDel } from '../slice/myServicesSlice';
import './MyServiceItem.css';

function MyServiceItem({ myService }: { myService: MyService }): JSX.Element {
  const { user } = useSelector((store: RootState) => store.auth);
  const dispatch = useAppDispatch();

  const delServiceItem = (): void => {
    dispatch(serviceDel(myService.id));
  };
  return (
    <div>
      {user?.language === 'english' ? (
        <div className="serviceItem-card">
          <div className="serviceItem-card-details">
            <div className="img-container">
              <img
                className="img-service"
                src={myService.image}
                alt="none"
              />
            </div>
            <h6>
              Price:<h4>{myService.price}</h4>
            </h6>
            <h6>
              Description:<h5>{myService.description}</h5>
            </h6>
          </div>
          
        </div>
      ) : (
        <div className="serviceItem-card">
          <div className="serviceItem-card-details">
            <div className="img-container">
              <img
                className="img-service"
                src={myService.image}
                alt="Изображения нет"
              />
            </div>

            <h6>
              Стоимость:<h4>{myService.price}</h4>
            </h6>
            <h6>
              Описание: <h5>{myService.description}</h5>
            </h6>
          </div>
          <button className="del-btn" type="button" onClick={delServiceItem}>
            УДАЛИТЬ
          </button>
        </div>
      )}
    </div>
  );
}

export default MyServiceItem;
