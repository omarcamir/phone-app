import React from 'react'
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBS() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand><Link to="/" className='nav-link'>E-commerce</Link></Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link><Link to="/" className='nav-link'>Home</Link></Nav.Link>
            <Nav.Link><Link to="/shop" className='nav-link'>Shop</Link></Nav.Link>
            <Nav.Link><Link to="/counter" className='nav-link'>Counter</Link></Nav.Link>
            <Nav.Link><Link to="/about" className='nav-link'>About</Link></Nav.Link>
            <Nav.Link><Link to="/contactUs" className='nav-link'>Contact us</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBS;
