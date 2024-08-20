import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as Icon from 'react-bootstrap-icons';
import {useState} from 'react';

function NavScrollExample() {

const [num, setNum] = useState(0);

function add(){
 setNum(num+1)
}


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home" >InstrumentsStore</Navbar.Brand>
        <Nav.Link href="#home" style={{marginRight:'30px'}}>Contacto</Nav.Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/cuerda">Cuerda</NavDropdown.Item>
              <NavDropdown.Item href="/viento">Viento</NavDropdown.Item>
              <NavDropdown.Item href="/percusion">Percusión</NavDropdown.Item>
            </NavDropdown>
        
            <Form className="d-flex" style={{marginLeft:'30px'}}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          </Nav>
          <Button variant="light" onClick={add}> <Icon.Headphones/></Button>
        <Button variant="light" href='/user'> <Icon.Person/>Usuario</Button>
        <Button variant="light" href='/cart'><Icon.Cart/>{num}</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  function add(){
    setNum(num+1); 
    }
  }

export default NavScrollExample;