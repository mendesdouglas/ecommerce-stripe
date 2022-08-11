
import React, { useState } from 'react';
import Logo from '../../logo.svg'

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
  return (
    <>
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
      
      <NavItem>
        <NavLink href="/register">Register</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login">Login</NavLink>
      </NavItem>
      
      
            
          </Nav>
      </Navbar>
      
    </>
  );
}

export default NavBar;