import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';

function Header() {
  return (

    <>


      <Navbar collapseOnSelect expand="lg" sticky="top" className='py-25 ' style={{ background: 'white' }}>
        <Container fluid className='px-5'>  
          <div className='logo'>
            <img src={require('../Image/asset 0.png')} alt="" />
          </div>
          <h1 style={{ color: '#00B98E', fontWeight: 'bold' }}>Makaan</h1>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="navbar-nav main_menu ms-auto">
              <Link to='/' className="nav-item nav-link active">Home</Link>
              <Link to='About' className="nav-item nav-link">About</Link>
              <div className="nav-item dropdown">
                <Link to='Property' className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Property</Link>
                <div className="dropdown-menu sub_menu rounded-0 m-0">
                  <Link to='Property_list' className="dropdown-item">Property List</Link>
                  <Link to='Property_type' className="dropdown-item">Property Type</Link>
                  <Link to='Property_agent' className="dropdown-item">Property Agent</Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu sub_menu rounded-0 m-0">
                  <Link to='Testimoninal' className="dropdown-item">Testimonial</Link>
                  <Link to='Error' className="dropdown-item">404 Error</Link>
                </div>
              </div>
              <Link to='Contact' className="nav-item nav-link ">Contact</Link>
            </div>
            <a href className="btn btn-primary px-4  ms-3 d-none d-lg-flex" style={{ background: '#00B98E' }}>Add Property</a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>


  );
}
export default Header