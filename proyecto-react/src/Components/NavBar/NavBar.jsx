import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div class="NavBar">
          <Navbar fixed="top" bg="light" data-bs-theme="light">
            <Container>
            <h1 class="d-flex align-items-center logo pt-3" href="#home">Flama</h1>
            <Nav className="d-flex justify-items-end align-items-center fs-5">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Productos</Nav.Link>
              <Nav.Link href="#pricing">Contacto</Nav.Link>
              <Nav.Link href="#pricing"><CartWidget/></Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}


export default NavBar;