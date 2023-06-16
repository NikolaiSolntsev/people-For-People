import React from 'react';
import MainVideo from '../assets/video.mp4';
import './Hero.css';

function Hero(): JSX.Element {
  return (
    <div className='hero'>
      <video autoPlay loop muted id='video'>
        <source src={MainVideo} type='video/mp4' />
      </video>
      <div className='hero-text'>
        <h1 style={{ color: 'black' }}>People f</h1>
        <h1 style={{ color: 'red' }}>o</h1>
        <h1 style={{ color: 'white' }}>r People</h1>
      </div>
    </div>
  );
}

export default Hero;
