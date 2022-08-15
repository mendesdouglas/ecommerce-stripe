import React, { useState } from 'react';
import Logo from '../../logo.svg'
import {
  Input
} from 'reactstrap'


function PriceCards({valuePrice, valueName, setValue, type}) {
    const [price, setPrice] = useState(valuePrice)
    const [name, setName] = useState(valueName)
  return (
      
      <div className='col'>
        <div className='card mb-4 rounded-3 shadow-sm'>
          <div className='card-header py-3'>
              <h4 className='my-0 fw-normal'>{name}</h4>
          </div>
          <div className='card-body'>
            <h1 className='card-title pricing-card-title'> {price} <small className='text-muted fw-light'></small></h1>
            <ul className='list-unstyled mt-3 mb-4'>
              <li> 5 exclusive stocks</li>
              <li> Free Market Analysis</li>
              <li> Email support</li>
              <li> Help center access</li>
            </ul>
            <button className='w-100 btn btn-lg btn-outline-danger'>SignUp</button>
          </div>
        </div>
      </div>
    

      
      
    
  );
}

export default PriceCards;