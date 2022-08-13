import React, {useState} from 'react';
import InputForm from '../../components/InputForm'
import ButtonForm from '../../components/ButtonForm'
import { toast } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'

import api from '../../services/api';
//import axios from 'axios'


function Login() {
    //label, value, setValue, type = "text"
    let navigate = useNavigate()
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    async function handleClickRegister(e){
        try{
            e.preventDefault()
            const {data} = await api.post('/login',{
                
                email, 
                password
                
            }) 
            console.log(data)
            if(data.error){
                console.log('ok',data.error)
                toast.error(data.error)
            } else {
                
                setEmail("")
                setPassword("")
                toast.success(`Hey ${data.user.name}. Welcome to our website`)
                navigate("/")
            }
        }catch(err){
            console.log(err)
            toast.error("Something went wrong. Try again")
        }
    }

    



    return (
        
        <div className="d-flex justify-content-center" style={{height:'80vh'}}>
        <div className="container align-items-center d-flex">
            <div className="row col-md-6 offset-md-3 text-center">
                <h1 className="pt-5 fw-bold">Login</h1>
                <p className="lead pb-4"> Access your subscription. Anytime. Anywhere</p>
                
                
                <div className="form-group">
                    <InputForm label="Email" value={email}  setValue={setEmail}/>
                    <InputForm label="Password" value={password} type={'password'} setValue={setPassword}/>
                    <div className="d-grid">
                        <ButtonForm handleClick={handleClickRegister} type="danger" text="Access" size="lg"/>
                    </div>
                </div>

                
            </div>
            
        </div>
  </div>
    );
  }


  export default Login;