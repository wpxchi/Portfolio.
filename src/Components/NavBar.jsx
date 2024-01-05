import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import './NavBar.css';

const HomeNavbar = () => {
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Link to={'/'}>
            <Navbar.Brand>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-house"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/aboutme">
                About me
              </Nav.Link>

              <Nav.Link as={Link} to='/projects'>Projects</Nav.Link>
              <Nav.Link as={Link} to='/CV'> CV</Nav.Link>
              <NavDropdown title="Social Media" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='https://www.linkedin.com/in/uriel-castillo-b782b0270/' target="_blank">Linkedin</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='https://github.com/wpxchi' target='_blank'>Github</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                {' '}
                Email: urielcastillo891@gmail.com / bnarrdo@gmail.com
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default HomeNavbar;