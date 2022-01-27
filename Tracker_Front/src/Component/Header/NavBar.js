import React, { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container, NavDropdown, Dropdown, Row, Col, Stack} from 'react-bootstrap/'
import "./StyleHeader.css"
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import Auth2 from "../Main/Auth2";
import AuthForm from "../Main/Auth2";

export default function NavBar(){
  const history = useHistory();
  const email = useSelector((state) => state.setAuth.email)
  let auth = useSelector((state) => state.enter.isAuth)

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
                      <Nav.Link onClick={() => history.push('/tracker')}>Tracker</Nav.Link>
                      <Nav.Link onClick={() => history.push('/create')}>Create</Nav.Link>
                      <Nav.Link onClick={() => history.push('/story')}>Story</Nav.Link>
                    </Nav>

                    <Nav>
                    <Nav.Link onClick={() => history.push('/story')}>{email}</Nav.Link>
                    <Nav.Link onClick={() => window.location.replace("/")}>Logout</Nav.Link>
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

            
                  
