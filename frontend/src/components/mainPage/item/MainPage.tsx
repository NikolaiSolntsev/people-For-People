import React from 'react';
import Footer from './Footer';
import FotoList from './FotoList';
import Hero from './Hero';
import './MainPage.css';

function MainPage(): JSX.Element {
  return (
    <div className='mainPage'>
      <Hero />
      <FotoList />
      <Footer />
    </div>
  );
}

export default MainPage;
