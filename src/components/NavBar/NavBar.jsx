import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
    return (
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="/">Kpop Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <NavLink to='/category/FirstMiniAlbum'> First Mini Album </NavLink>
        <NavLink to='/category/SecondMiniAlbum'> Second Mini Album </NavLink>
        {/* <NavDropdown title="Merchandise" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Light Sticks</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Magazines</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Apparel</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Photocards</NavDropdown.Item>
        </NavDropdown> */}
        </Nav>
        {/* <Nav>
            <Nav.Link href="#deets">Support</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Login/Signup   
            </Nav.Link>
        </Nav> */}
    </Navbar.Collapse>
    <CartWidget/>
    </Container>
    </Navbar>
    )
}

export default NavBar