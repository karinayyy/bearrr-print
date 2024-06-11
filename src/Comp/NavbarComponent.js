import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavbarComponent.css';
import logo from '../img/logo.png';

const NavbarComponent = () => {
    return (
        <Navbar expand="lg" className="navbar-light-custom" fixed="top">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        height="40"
                        className="d-inline-block align-top"
                        alt="Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
                        <Nav.Link href="#features" className="nav-link-custom">Features</Nav.Link>
                        <Nav.Link href="#pricing" className="nav-link-custom">Pricing</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;
