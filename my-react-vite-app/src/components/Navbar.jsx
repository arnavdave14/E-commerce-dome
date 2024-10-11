import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart , FaShopify } from "react-icons/fa";
import './Navbar.css'
import {StyledButton , StyledAlink} from './Navbar.style' 









function NavScroll() {
return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
        <Navbar.Brand href="#"><FaShopify  size={36}/>
        <span className='ms-2'>My Store</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"  className="navbar-center">
        <Nav className="navbar-nav-center">
            <Nav.Link href="#action1">Men</Nav.Link>
            <Nav.Link href="#action2">Women</Nav.Link>
            <Nav.Link href="#action3">Kids</Nav.Link>
        </Nav>
            

        <Form className="d-none  d-lg-flex">
        <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
  />
  <StyledButton onClick={()=>console.log("click")}>Search</StyledButton>
  <StyledAlink href='#' className='ms-2' ><FaShoppingCart size={26} /></StyledAlink>
            </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;