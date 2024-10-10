import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



import { Link } from 'react-router-dom';

function NavigationBar() {
// const{t,i18n} = useTranslation();



  return (
    <Navbar collapseOnSelect expand="lg"  className="navbar">
    <Container >
      <Navbar.Brand as={Link} to="">
      <img  className="pilt" src="/buynow.png" alt="buynow" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" >
          <NavDropdown  title="Admin" id="collapsible-nav-dropdown">
            <NavDropdown.Item  as={Link} to="/admin">Home</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/add-product">Add Product</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/edit-product/:index">Edit Product</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  as={Link} to="/admin/maintain-shops">Maintain Shops</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/maintain-products">Maintain Products</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/maintain-categories">Maintain Categories</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="">Home</Nav.Link>
          <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>

        <Nav>  
          <Nav.Link as={Link} to="/login">Log in</Nav.Link>
          <Nav.Link as={Link} to="/signup">Register</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar