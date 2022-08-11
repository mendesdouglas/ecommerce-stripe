import React, { useState } from 'react';
import Logo from '../../logo.svg'
import {
  Input
} from 'reactstrap'


function ButtonForm({type = 'primary', size='md', text="submit", handleClick}) {
    
  return (
    
      
        <button onClick={handleClick} className={`btn btn-${type} btn-${size}`}>{text}</button>
        

      
      
    
  );
}

export default ButtonForm;