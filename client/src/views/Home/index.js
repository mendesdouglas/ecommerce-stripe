import React, { useEffect, useState } from 'react';
import { Button, Container, Row } from 'reactstrap';
import NavBar from '../../components/NavBar';
import PriceCards from '../../components/PriceCards'
import api from '../../services/api'

function Home() {
  const [prices, setPrices] = useState([])

  const fetchPrices = async() => {
    const {data} = await api.get('/prices')
    console.log('prices get request',data)
    setPrices(data)
  }

  const handleClick = async(e) => {
    e.preventDefault()
    alert('clicked')
  }

  useEffect(() => {
    
    fetchPrices()
  },[])

  return (
    
        <div className="container-fluid">
            <div className="row col-md-6 offset-md-3 text-center">
                <h1 className="pt-5 fw-bold">Explore the right plan for your business</h1>
                <p className="lead pb-4">Chose a plan that suites you best!</p>
                <div className="row  pt-5 mb-3 text-center">
                  
                  {prices && prices.map((price) => (
                    <PriceCards key={price.id} price={price} handleClick={handleClick}/>
                  ))}

                </div>
                
                
            </div>
        </div>
  
      
    
  );
}

export default Home;