import React from "react";
import axios from "axios";
import { useState, useEffect, createContext } from "react";
//import api from '../services/api';

const UserContext = createContext()
const UserProvider = ({children})=>{
    const [state, setState] = useState({
        user:{},
        token:"",
        
    })
    useEffect(() =>{
        setState(JSON.parse(localStorage.getItem('auth')))
    },[])

    //connection axios
    const token = state && state.token ? state.token : ""
    axios.defaults.baseURL = process.env.REACT_APP_API
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

    return (
        <UserContext.Provider value={[state, useState]} >
            {children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProvider}