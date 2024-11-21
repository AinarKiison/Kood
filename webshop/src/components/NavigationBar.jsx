import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';

function NavigationBar() {
// const{t,i18n} = useTranslation();

const{cartSum}= useContext(CartSumContext);
const {loggedIn, setLoggedIn} = useContext(AuthContext);

function logout() {
  setLoggedIn(false);
  sessionStorage.removeItem("token");
}

  return (
    <Navbar collapseOnSelect expand="lg"  className="navbar">
    <Container >
      <Navbar.Brand as={Link} to="">
      <img  className="pilt" src="/buynow.png" alt="buynow" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" >
          {loggedIn === true &&
          <NavDropdown  title="Admin" id="collapsible-nav-dropdown">
            <NavDropdown.Item  as={Link} to="/admin">Home</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/add-product">Add Product</NavDropdown.Item>
            {/* <NavDropdown.Item  as={Link} to="/admin/edit-product/:index">Edit Product</NavDropdown.Item> */}
            <NavDropdown.Divider />
            <NavDropdown.Item  as={Link} to="/admin/maintain-shops">Maintain Shops</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/maintain-products">Maintain Products</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/maintain-categories">Maintain Categories</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/supplier">Supplier</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/admin/electricity">Electricity</NavDropdown.Item>
          </NavDropdown>}
          <Nav.Link as={Link} to="">Home</Nav.Link>
          <Nav.Link as={Link} to="/shops">Shops</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>

        <Nav>  
          {loggedIn === false && <Nav.Link as={Link} to="/login">Log in</Nav.Link>}
          {loggedIn === true &&<Nav.Link onClick={logout}>Log Out</Nav.Link>}

          <Nav.Link as={Link} to="/signup">Register</Nav.Link>
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
        </Nav>

        <Nav className='hind'>
          {cartSum}€€
        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar