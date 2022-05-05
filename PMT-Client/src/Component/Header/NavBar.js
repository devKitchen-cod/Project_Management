import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, NavDropdown, Dropdown, Row, Col, Stack} from 'react-bootstrap/'
import "../../Styles/styleHeader.css"

import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { user_logout } from "../../store/actions/auth";


export default function NavBar(){
  const history = useHistory();
  const dispatch = useDispatch()
  const data = useSelector((state) => state.Auth.data_user)
  let name_user = null
  data.map((item) => {
    name_user = item.name_user
  })
  
  let isauth = useSelector((state) => state.Auth.authenticate)
  
  const handle_logout =() =>{
    dispatch(user_logout())
    localStorage.setItem('token', null)
    window.location.replace("/")
  }

  return(
    <div className="header-div">
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
      <Navbar.Brand onClick={() => history.push("/startp")}>
          startUP! Factory
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">

          {isauth ? (
            <>
               <Nav className = "me-auto">                  
                <Nav.Link onClick={() => history.push("/project")}>Projects</Nav.Link>              
                <Nav.Link onClick={() => handle_logout()}>Logout</Nav.Link>
              </Nav>
              
              <Nav>
                <Nav.Link onClick={() => history.push("/project")}>{name_user}</Nav.Link>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Dropdown"
                  menuVariant="white"
                  >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => handle_logout()}>Logout</NavDropdown.Item>
      
                </NavDropdown>
              </Nav>
            </>
          ) : (
            <>
              <Nav className ="me-auto">
                <Nav.Link onClick={() => history.push("/about_us")}>About Us</Nav.Link>
                <Nav.Link onClick={() => history.push("/create_profiles_page")}>Contacts</Nav.Link>      
              </Nav>
              <Nav>
                <Nav.Link onClick={() => history.push("/login")}>Sign in</Nav.Link>
                <Nav.Link onClick={() => history.push("/auth")}>Sign up</Nav.Link>      
              </Nav>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
      
  ) 
}

            
                  
