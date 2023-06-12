import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/item/Main';
import MyServiceItem from '../components/myService/item/MyServiceItem';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <div className="App">
        <MyServiceItem />
      </div>
    </div>
  );
}

export default App;
