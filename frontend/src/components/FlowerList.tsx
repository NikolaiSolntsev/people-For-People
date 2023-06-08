import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import FlowerItem from './FlowerItem';

function FlowerList(): JSX.Element {
  const { flowers } = useSelector((store: RootState) => store.flowerReducer);
  return (
    <div>
      {flowers.map((flower) => (
        <FlowerItem key={flower.id} flower={flower} />
      ))}
    </div>
  );
}

export default FlowerList;
