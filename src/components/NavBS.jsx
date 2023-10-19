import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBS() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/" className='nav-link'>E-Commerce</Link></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link><Link to="/" className='nav-link'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/shop" className='nav-link'>Shop</Link></Nav.Link>
            <Nav.Link><Link to="/features" className='nav-link'>Features</Link></Nav.Link>
            <Nav.Link><Link to="/contactUs" className='nav-link'>Contact us</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBS;
