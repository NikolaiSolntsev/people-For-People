import React from 'react';
import './Footer.css';

function Footer(): JSX.Element {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='col'>
          <h4>Products</h4>
          <p>App</p>
        </div>
        <div className='col'>
          <h4>Developers</h4>
          <p>Analytics</p>
        </div>
        <div className='col'>
          <h4>Governance</h4>
          <p>Token Lists</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
