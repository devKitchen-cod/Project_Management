import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, NavDropdown, Dropdown, Row, Col, Stack} from 'react-bootstrap/'

import "../../Styles/styleHeader.css"

import { useHistory } from "react-router";
import { useSelector } from "react-redux";


export default function NavBar(){
  const history = useHistory();
  const email = useSelector((state) => state.setAuth.email)
  let auth = useSelector((state) => state.enter.isAuth)
  const handle_logout =() =>{
    localStorage.setItem('token', null)
    window.location.replace("/")
  }

  return(
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand onClick={() => history.push('/startp')}>startUP! Factory</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                   {auth ? (
                     <>                     
                     <Nav className="me-auto">
                      <Nav.Link onClick={() => history.push('/project')}>Projects</Nav.Link>                                                            
                    </Nav>

                    <Nav>
                    <Nav.Link onClick={() => history.push('/project')}>{email}</Nav.Link>
                    <Nav.Link onClick={() => handle_logout()}>Logout</Nav.Link>
                    </Nav>  
                    </>                    
                   ):(
                    <div className = 'sign'>
                    <Nav>
                    <Nav.Link onClick ={()=> history.push('/login')}>Sign in</Nav.Link>
                    <Nav.Link onClick ={()=> history.push('/auth')}>Sign up</Nav.Link>

                    
                    </Nav>
                    </div>                    
                   )}                                      
            </Navbar.Collapse>      
          </Container>          
        </Navbar>      
  ) 
}

            
                  
