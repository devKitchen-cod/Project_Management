import React from 'react'
import { useHistory } from "react-router"

import f1 from '../../Styles/img/f4.jpg'
import f2 from '../../Styles/img/f2.jpg'
import f3 from '../../Styles/img/f3.jpg'
import {Button, Card, Col, Container, Row } from "react-bootstrap"

export default function Cards(){
  const history = useHistory();
  return(
    
      <div >
        <Container style = {{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
            <Col>
              <Card style = {{width: '18rem'}}>
                  <Card.Img variant = 'top' src = {f1}/>
                  <Card.Body>
                    <Card.Title>startUP!</Card.Title>
                    <Card.Text> Get your acccount for free</Card.Text>
                    <Button variant = "primary"  onClick ={()=> history.push('/auth')}>Get Account</Button>
                  </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style = {{width: '18rem'}}>
                  <Card.Img variant = 'top' src = {f2}/>
                  <Card.Body>
                    <Card.Title>Create!</Card.Title>
                    <Card.Text> Create Your own Project!</Card.Text>
                    <Button variant = "primary" onClick ={()=> history.push('/create')}>Create</Button>
                  </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style = {{width: '18rem'}}>
                  <Card.Img variant = 'top' src = {f3}/>
                  <Card.Body>
                    <Card.Title>TracKING!</Card.Title>
                    <Card.Text> Track Your Project 24/7 </Card.Text>
                    <Button variant = "primary"  onClick ={()=> history.push('/tracker')}>Track</Button>
                  </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>  
        </div>
 
  )
}