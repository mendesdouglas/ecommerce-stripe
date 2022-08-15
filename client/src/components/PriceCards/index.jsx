import React, { useState } from 'react';
//import Logo from '../../logo.svg'


import {
     
  
  NavItem,
  NavLink,
 
} from 'reactstrap';
import {Link} from 'react-router-dom'



function PriceCards({price, handleSubscription,  valueName, setValue, type}) {
    //const [price, setPrice] = useState(valuePrice)
    const [name, setName] = useState(valueName)
    


    function dinamicDescription(){
      if(price.nickname==='BASIC'){
        return '5 exclusive stocks'
      }else if(price.nickname==='STANDARD'){
        return '10 exclusive stocks'
      }else{
        return '20 exclusive stocks'
      }

    }
    function handleSubscription(price){return;}

    function buttonStyle(){
      return price.nickname === 'BASIC' ? 'btn-outline-danger':'btn-danger'

    }
    function headerStyle(){
      return price.nickname === 'PREMIUM' ? 'bg-danger text-light':''
    }

    function borderStyle(){
      return price.nickname === 'PREMIUM' ? 'border-danger':''

    }
  return (
      
      <div className='col'>
        <div className={`card mb-4 rounded-3 shadow-sm ${borderStyle()}`}>
          <div className={`card-header py-3 ${headerStyle()}`}>
              <h4 className='my-0 fw-normal'>{price.nickname}</h4>
          </div>
          <div className='card-body'>
            <h1 className='card-title pricing-card-title'>
            {(price.unit_amount/100).toLocaleString("en-US", {
                style: 'currency',
                currency: 'USD'
              })}{" "}
              <small className='text-muted fw-light'> /mo
              </small></h1>
            <ul className='list-unstyled mt-3 mb-4'>
              <li className='fw-bold'> {dinamicDescription()}</li>
              <li> Free Market Analysis</li>
              <li> Email support</li>
              <li> Help center access</li>
              
            </ul>
            <Link to='/register'>
            <button onClick={() => handleSubscription(price)} className={`w-100 btn btn-lg ${buttonStyle()}`}>SignUp</button>
            </Link>
          </div>

          
          {/* <pre>{JSON.stringify(price, null, 4)}</pre> */}
        </div>
      </div>
    

      
      
    
  );
}

export default PriceCards;