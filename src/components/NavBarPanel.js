import React from 'react'
import { NavbarCollapse, NavbarToggle } from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

const NavBarPanel = () => {
  const cartProducts = useSelector(state => state.cart);
  return (
    <Navbar expand="lg" className="bg-dark text-white p-4">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>Fashion Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Nav>
            <Nav.Link to='/' as={Link} className='text-white ms-5'>Products</Nav.Link>
          </Nav>
         
        <NavbarToggle/>
        <NavbarCollapse className='justify-content-end' >
          <Navbar.Text >
            <Nav.Link to="/cart" as={Link}>
              <span className='bi bi-cart4 bg-primary text-white p-3 rounded rounded-4'>My Cart {cartProducts.length}</span>
            </Nav.Link>
          </Navbar.Text>
        </NavbarCollapse>

  
      </Container>
    </Navbar>
  );
  
}

export default NavBarPanel
