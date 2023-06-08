import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function FormAdd(): JSX.Element {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const dispatch = useDispatch();

  const addFlower = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetch('api/flowers', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name, url }),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'flower/add', payload: data }));
    setName('');
    setUrl('');
  };

  return (
    <div>
      <form onSubmit={addFlower}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          name="url"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button type="submit">add</button>
      </form>
    </div>
  );
}

export default FormAdd;
