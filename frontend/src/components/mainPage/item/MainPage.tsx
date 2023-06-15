import React from 'react';
import Footer from './Footer';
import Hero from './Hero';
import './MainPage.css';

function MainPage(): JSX.Element {
  return (
    <div className='mainPage'>
      <h1>MainPage</h1>
      <Hero />
      <Footer />
    </div>
  );
}

export default MainPage;
