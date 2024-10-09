import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { Link } from 'react-router-dom';

function NavigationBar() {
// const{t,i18n} = useTranslation();



  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand as={Link} to="">
      <img  className="pilt" src="https://wonderfulengineering.com/wp-content/uploads/2014/10/image-wallpaper-15-1024x768.jpg" alt="lind" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {/* <Nav.Link as={Link} to="/kontakteeru">{t("contact")}</Nav.Link>
          <Nav.Link  as={Link} to="/osta-kinkekaart">{t("kinkekaart")}</Nav.Link> */}
          <NavDropdown title="Kasutaja" id="collapsible-nav-dropdown">
            <NavDropdown.Item  as={Link} to="/seaded">Seaded</NavDropdown.Item>
            <NavDropdown.Item  as={Link} to="/profiil">Profiil</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item  as={Link} to="/admin">Admin</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/admin">Ostukorv</Nav.Link>
          <Nav.Link as={Link} to="/logi-sisse">Logi sisse</Nav.Link>
          <Nav.Link as={Link} to="/registreeru">Registreeru</Nav.Link>
          {/* <button onClick={()=> i18n.changeLanguage("en")}>ENG</button>
          <button onClick={()=> i18n.changeLanguage("et")}>ET</button> */}
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar