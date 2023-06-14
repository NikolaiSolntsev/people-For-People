import React from 'react';
import { Carousel } from 'react-bootstrap';
function Slider(): JSX.Element {
  return (
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' alt='url' />
      </Carousel.Item>
      <Carousel.Caption>
        <h3>People for people</h3>
      </Carousel.Caption>
      <Carousel.Item>
        <img className='d-block w-100' alt='url' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' alt='url' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
