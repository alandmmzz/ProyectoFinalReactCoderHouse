import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom'
import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <div className="NavBar">
          <Navbar fixed="top" bg="light" data-bs-theme="light">
            <Container>
            <Link to="/" className="d-flex align-items-center logo text-black pt-3" ><h1>Flama</h1></Link>
            <Nav className="d-flex justify-items-end align-items-center fs-5">
              <NavLink to="/category/gorros" className="text-black me-3">Gorros</NavLink>
              <NavLink to="/category/lentes" className="text-black me-3">Lentes</NavLink>
              <NavLink to="/category/accesorios" className="text-black me-3">Accesorios</NavLink>
              <NavLink to="/cart" className="me-2"><CartWidget/></NavLink>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
}


export default NavBar;