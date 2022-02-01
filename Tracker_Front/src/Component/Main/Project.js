

import React, { useEffect, useState } from 'react'
import {Button, Card, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { notcreate, reqcreate, reqsetproject } from '../../Utils/redux/actions';
import { SETIDPRO, SETNAMEOFPROJECT } from '../../Utils/redux/redux-types';
import '../../Styles/styleProject.css'

import f12 from '../../Styles/img/f12.png'

export default function Project(){  
 
  const dispatch = useDispatch();
  const history = useHistory()
  const state = useSelector((state) => state)

  const email = useSelector((state) => state.setAuth.email)
  const projects = useSelector((state) => state.setProject.list_of_projects)
  const name_of_project = useSelector((state) => state.setProject.name_of_project)

  const obj = {email: email}
  const obj1 = {email: email, name_of_project: name_of_project}

  useEffect(() => {dispatch(reqsetproject(obj))}, [])
  useEffect(() =>{
    if(state.reducer.created){
    
      history.push('/project')
      dispatch(notcreate())
    }
  })

  const handle_vue  = (id) => {    
    dispatch({type: SETIDPRO, payload: id})
    history.push('/vue_project')
  }

  const handleSubmit =  _event => {    
    if (obj1.email, obj1.name_of_project === '') {
     alert('Fild the Form!');
    }
    else{
      dispatch(reqcreate(obj1))
    }
   }

   const handleGoToTracker = (selectedProject)=> {
    console.log(selectedProject)
    dispatch({type: SETNAMEOFPROJECT, payload: selectedProject})
    history.push('/tracker')
   }

   const handle_Delete_Project=()=>{
     //DELETE PROJECT AND ALL TASKS OF PROJECT
   }


  return(  
    <div className = 'main-container111'> 
      <div className = 'v'>
        <div className = 'bh'></div>
      <Button onClick={handleSubmit}>+</Button>
     
        <Form.Group onChange = {e => dispatch({type:SETNAMEOFPROJECT, payload: e.target.value})}>
          <Form.Floating>
            <Form.Control id="floatingInputCustom" type="text" placeholder="name@example.com"/>
            <label htmlFor="floatingInputCustom">Create Project!</label>
          </Form.Floating>
        </Form.Group>

      </div>
      <div className='m' ><img src ={f12}/></div>
      <div className = 'project-container'>
        {projects.map((item, key) => (
        <div className = 'item' key= {key}>
        <Card bg = "white" >
         <Card.Header><h3>{item.name_project}</h3></Card.Header>
          <Card.Body>
            <Card.Text>Time of work on project: {item.current_time}</Card.Text>
            <Button onClick = {() => handle_vue(item.name_project)}>View Project</Button>
            <div className='bt' ><Button variant = 'danger'>Delete Project</Button></div>
            <div className='bt' onClick = {() => handleGoToTracker(item.name_project)} ><Button variant = 'success'>Track</Button></div>
          </Card.Body>
          
        </Card>
        </div>
        ))}
      </div>
    </div>
  )
} 
