
import React, { useState, Fragment } from 'react';
import Logo from '../../logo.svg'
import { isAuth } from '../../utils/isAuth';
import {useNavigate} from 'react-router-dom'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    
    Nav,
    NavbarBrand,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Row
  } from 'reactstrap';

function NavBar(args) {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    let navigate = useNavigate()

  const logout =() =>{
    localStorage.removeItem('auth')
    navigate("/login")

  }
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