import React, { useState } from 'react';
import Logo from '../../logo.svg'
import {
  Input
} from 'reactstrap'


function InputForm({label, value, setValue, type}) {
    
  return (
    
      <div className='input-group mb-3'>
        <span className='input-group-text'>{label}</span>
        <input type={type} onChange={e => setValue(e.target.value)} value={value} className='form-control'/>
        { /* comentario de verificação PE :) 
        <div className='row'>
          <pre>{JSON.stringify({label, type, value, setValue})}</pre>
        </div>
        */ }
      </div>

      
      
    
  );
}

export default InputForm;