import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import NavBarF from '../Header/NavBarForAuth'


function StoryF(){
  
  return(
    <div><NavBarF/>
    <div>
        <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
 

 
    </div>
    </div>
  )
}
export default StoryF