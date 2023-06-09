import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FlowerList from '../components/FlowerList';
import FormAdd from '../components/FormAdd';
import './App.css';

function App(): JSX.Element {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/flowers')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'flowers/init', payload: data }));
  }, []);
  return (
    <div className="App">
      <FormAdd />
      <FlowerList />
    </div>
  );
}

export default App;
