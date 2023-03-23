import { Container, Nav, Navbar} from 'react-bootstrap';
import React from 'react';

const Navbars = () => {
    return (
          <Navbar className='b' bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="./App.js">Welcome To My Store Alimnfl</Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
      );
    };

export default Navbars;