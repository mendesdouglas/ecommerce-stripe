import React, {useState} from 'react';
import InputForm from '../../components/InputForm'
import ButtonForm from '../../components/ButtonForm'
import { toast } from 'react-hot-toast';
import api from '../../services/api';


import {
    Input,
    Label,
    
  } from 'reactstrap';



function Register(label) {
    //label, value, setValue, type = "text"
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    async function handleClickRegister(e){
        
        //console.log(name, email, password)
        try {
            e.preventDefault()
            await api.post('/register',{
                name,
                email, 
                password
        
            })
            toast.success('Successfully toasted!')
            
            

        }catch(err){
            console.log(err)
            toast.error("teste")
        }
    }
    return (
        
        <div className="d-flex justify-content-center" style={{height:'80vh'}}>
        <div className="container align-items-center d-flex">
            <div className="row col-md-6 offset-md-3 text-center">
                <h1 className="pt-5 fw-bold">Register</h1>
                <p className="lead pb-4"></p>
                
                
                <div className="form-group">
                    <InputForm label="Name" value={name} setValue={setName}/>
                    <InputForm label="Email" value={email}  setValue={setEmail}/>
                    <InputForm label="Password" value={password} type={'password'} setValue={setPassword}/>
                    <div className="d-grid">
                        <ButtonForm handleClick={handleClickRegister} type="danger" text="Send" size="lg"/>
                    </div>
                </div>

                
            </div>
            
        </div>
  </div>
    );
  }


  export default Register;