import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from './img1.jpg';

import img2 from './img2.jpg';

import img3 from './img3.jpg';

function Slider(): JSX.Element {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={img1} alt='url' />
      </Carousel.Item>
      <Carousel.Caption>
        <h3>People for people</h3>
      </Carousel.Caption>
      <Carousel.Item>
        <img className='d-block w-100' src={img2} alt='url' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={img3} alt='url' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
