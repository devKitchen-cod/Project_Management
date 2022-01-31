

import React, { useEffect, useState } from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { reqsetproject } from '../../Utils/redux/actions';
import { SETIDPRO } from '../../Utils/redux/redux-types';
import '../../Styles/styleProject.css'

import f12 from '../../Styles/img/f12.png'

export default function Project(){
 

  const dispatch = useDispatch();
  const history = useHistory()
  const email = useSelector((state) => state.setAuth.email)
  const obj = {email: email}
  const projects = useSelector((state) => state.setProject.list_of_projects)
  
  useEffect(() => {dispatch(reqsetproject(obj))}, [])

  const handle_vue  = (id) => {
    console.log(id)
    dispatch({type: SETIDPRO, payload: id})
    history.push('/vue_project')
  }



  return(
    
    <div className = 'main-container111'> 
      <div className = 'v'>
        <div className = 'bh'></div>
      <Button  >Create</Button>
      <Form.Group>
        
      <Form.Floating>
      
      <Form.Control id="floatingInputCustom" type="text" placeholder="name@example.com"/>
                      <label htmlFor="floatingInputCustom">Name</label>
      </Form.Floating>
      {/* <Button  style = {{background: '#272727'}}>Create</Button> */}
    </Form.Group>
      </div>
      <div className='m' ><img src ={f12}/></div>
      <div className = 'project-container'>
        {projects.map((item) => (
        <div className = 'item'>
        <Card bg = "white">
          
         <Card.Header><h3>{item.name_project}</h3></Card.Header>
          <Card.Body>
            <Card.Text>Time of work on project: <h4>{item.current_time}</h4></Card.Text>
            <Button onClick = {() => handle_vue(item.name_project)}>View Project</Button>
            <div className='bt'><Button variant = 'danger'>Delete Project</Button></div>
          </Card.Body>
          
        </Card>
        </div>
        ))}
      </div>
{/*     
     {projects.map((item) =>(      
      <Card bg="white">
        <Card.Header as="h5">{item.name_project}</Card.Header>
          <Card.Body>
            <Card.Title>TIME: {item.current_time}</Card.Title>
            <Card.Text>
              Description of Project
            </Card.Text>  
            <Button onClick = {() => handle_vue(item.name_project)}>View Project</Button>
          </Card.Body>
      </Card>

    ))}
     */}

    </div>
  )
} 
