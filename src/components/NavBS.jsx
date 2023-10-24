import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

function NavBS() {

  const counterGlobalState = useSelector(store => store.counter.counter)
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className='nav-link'>E-commerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" className='nav-link'>Home</Nav.Link>
              <Nav.Link as={Link} to="/shop" className='nav-link'>Shop</Nav.Link>
              <Nav.Link as={Link} to="/counter" className='nav-link'>Counter <span className=''>{counterGlobalState}</span></Nav.Link>
              <Nav.Link as={Link} to="/about" className='nav-link'>About</Nav.Link>
              <Nav.Link as={Link} to="/contactus" className='nav-link'>Contact us</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login" className='nav-link'>Login</Nav.Link>
              <Nav.Link as={Link} to="/register" className='nav-link'>Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

export default NavBS;
