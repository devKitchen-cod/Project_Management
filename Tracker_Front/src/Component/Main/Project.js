
import React, { useEffect, useState } from 'react'
import {Button, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { reqsetproject } from '../../Utils/redux/actions';
import { SETIDPRO } from '../../Utils/redux/redux-types';
import NavBarF from '../Header/NavBarForAuth';


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
    <div>
      <NavBarF/>
      {projects.map((item) =>(
    <Card style ={{ margin: "100px", marginLeft:"300px", marginRight: "300px", color: ''}} bg="white">
      <Card.Header as="h5">{item.name_project}</Card.Header>
      <Card.Body>
        <Card.Title>TIME: {item.current_time}</Card.Title>
        
        <Card.Text>
          Description of Project
        </Card.Text>  

        <Button onClick = {() => handle_vue(item.name_project)}>View Project</Button>

      </Card.Body>
    </Card>
    ))
    }
    </div>
  )
} 