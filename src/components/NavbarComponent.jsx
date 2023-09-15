import {useState, useEffect} from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {navLinks} from '../data/index'
import { NavLink } from 'react-router-dom';

import {useNavigate} from "react-router-dom";

const NavbarComponent = () => {

  let navigate = useNavigate();

  const [changeColor, setChangeColor] = useState(false);

  const changeBackgrounColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else{
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgrounColor();

    window.addEventListener("scroll", changeBackgrounColor);
  });
  
  return (
    <div>
     <Navbar fixed="top" bg="none" expand="lg" className={changeColor ? "color-active" : ""} >
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>Ng.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mx-auto text-end">
            {navLinks.map((link) => {
              return (
              <div className="nav-link " key={link.id}>
                <NavLink to={link.path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""} end>
                  {link.text}
                </NavLink>
              </div>
              );
            })}
          </Nav>

          <div className='text-end'>
            <button className='btn btn-outline-danger rounded-1' onClick={() => navigate("/joinwithus")}>Join With Us</button>
          </div>

          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponent;
