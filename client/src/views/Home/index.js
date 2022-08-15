import React from 'react';
import { Button, Container, Row } from 'reactstrap';
import NavBar from '../../components/NavBar';
import PriceCards from '../../components/PriceCards'

function Home() {
  return (
    
        <div className="container-fluid">
            <div className="row col-md-6 offset-md-3 text-center">
                <h1 className="pt-5 fw-bold">Explore the right plan for your business</h1>
                <p className="lead pb-4">Chose a plan that suites you best!</p>
                <div className="row  pt-5 mb-3 text-center">
                  <PriceCards valueName={'Basic'} valuePrice={50}></PriceCards>
                  <PriceCards valueName={'Pro'} valuePrice={100}></PriceCards>
                  <PriceCards valueName={'Enterprise'} valuePrice={150}></PriceCards>
                </div>
                
                
            </div>
        </div>
  
      
    
  );
}

export default Home;