import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Home from '../views/Home';
import Register from '../views/Register';
import Login from '../views/Login';
import {Toaster} from 'react-hot-toast'


export default function Routers(){
    return (
        <BrowserRouter>
        <NavBar/>
        <Toaster position='top-center' reverseOrder={true} toastOptions={{duration:2000}}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />  
                <Route path="/login" element={<Login />} />    
            </Routes>
        </BrowserRouter>

    )
}