import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'

export default function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" variant="dark" id='color-nav'>
        <Container id='link-container'>
          <Navbar.Brand id='name-text'>Christopher Tangarife</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="me-auto" id='font-size'>

              <LinkContainer to="/">
                <Nav.Link id='links'>About Me</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/projects">
                <Nav.Link id='links'>Projects</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link id='links'>Contact</Nav.Link>
              </LinkContainer>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}