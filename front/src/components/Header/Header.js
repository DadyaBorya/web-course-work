import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./assets/logo.png"
import React from "react";

function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/" className="d-flex align-items-center">
                    <img
                        alt=""
                        src={logo}
                        width="48"
                        height="48"
                        className="d-inline-block align-top"
                    />{' '}
                    Облік перевезень
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Автомобілі</Nav.Link>
                        <Nav.Link href="/transportation">Перевезення</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;
