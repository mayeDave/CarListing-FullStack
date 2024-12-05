import './Navigationbar.css'; // Import the CSS file
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

function Navigationbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const authToken = localStorage.getItem('authToken');
  const loginUser = JSON.parse(localStorage.getItem('loginUser'));

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('loginUser');
    navigate('/login');
  };

  return (
    <Navbar
      expand="lg"
      bg="light"
      className={`shadow-sm ${scrolled ? 'navbar-shrink' : ''}`}
    >
      <Container containerFluid>
        <Navbar.Brand href="#" className="ms-5">
          <a href="/" className="text-decoration-none">
          <img src="/images/carLogo3.jpg" alt="Logo" style={{ width: '150px', height: '100px' }} />
          <p className="fw-bold text-center text-muted fst-italic">Maye Autos</p>
          </a>
          
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link href="/" className="fs-5 fw-bold ms-5 text-danger">Home</Nav.Link>
            <Nav.Link href="/about" className="fs-5 fw-bold ms-5 text-danger">About</Nav.Link>
            <Nav.Link href="/contact" className="fs-5 fw-bold ms-5 text-danger">Contact</Nav.Link>
            <Nav.Link href="/all-cars" className="fs-5 fw-bold ms-5 text-danger">Listing</Nav.Link>
            <Nav.Link href="/blog" className="fs-5 fw-bold ms-5 text-danger">Blog</Nav.Link>
            <Nav.Link href="/add-car" className="fs-5 fw-bold ms-5 text-danger">Add Car</Nav.Link>

            <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              className="fs-5 fw-bold ms-5 text-primary"
            >
              <NavDropdown.Item href="#action3">Cars</NavDropdown.Item>
              {authToken ? (
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              ) : (
                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              )}
              <NavDropdown.Divider />
              <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigationbar;
