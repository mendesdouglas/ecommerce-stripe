
import React, { useState, Fragment, useContext } from 'react';
import Logo from '../../logo.svg'
import { isAuth } from '../../utils/isAuth';
import {useNavigate} from 'react-router-dom'
import { UserContext } from '../../context';

import {
    Navbar,    
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
   
  } from 'reactstrap';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(true);
    const [state, setState] = useContext(UserContext)

    const toggle = () => setIsOpen(!isOpen);
    let navigate = useNavigate()

  const logout =() =>{
    localStorage.removeItem('auth')
    navigate("/login")
  }

  console.log('STATE =>', state)
  return (
    <Fragment>
      <Navbar className='border'>
        <NavbarBrand href="/">
          <img
            alt="logo"
            src={Logo}
            style={{
              height: 40,
              width: 40
            }}
          />
        </NavbarBrand>
        <Nav className="me-auto" >
        <NavItem>
        <NavLink  href="/" active>Home</NavLink>
      </NavItem>
      {isAuth() ? (
        <Fragment>
        <NavItem>
          <NavLink onClick={logout} >Logout</NavLink>
        </NavItem>
        </Fragment>
      ):(
        <Fragment>
        <NavItem>
        <NavLink href="/register">Register</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login">Login</NavLink>
      </NavItem>
        </Fragment>
      )}
  
      </Nav>
      </Navbar>
      
    </Fragment>
  );
}

export default NavBar;