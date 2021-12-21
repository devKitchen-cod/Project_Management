
import React, { useEffect } from 'react'
import {Button, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { reqsetproject } from '../../Utils/redux/actions';


export default function ProjectF(){
  const dispatch = useDispatch();
  const history = useHistory()
  const email = useSelector((state) => state.setAuth.email)
  const obj = {email: email}
  const projects = useSelector((state) => state.setProject.list_of_projects)
  useEffect(() => {dispatch(reqsetproject(obj))}, [])
  
  const handle_vue  = _event => {
    history.push('/vue_project')
  }

  return(
    <div>
      {projects.map((item) =>(
    <Card style ={{ margin: "100px", marginLeft:"300px", marginRight: "300px", color: ''}} bg="white">
      <Card.Header as="h5">{item.Name_of_Project}</Card.Header>
      <Card.Body>
        <Card.Title>TIME: {item.qurent_time}</Card.Title>
 
        <Card.Text>
          Description of Project
       
        </Card.Text>  
        
        <Button onClick = {handle_vue}>View Project</Button>
        
        
      </Card.Body>
    </Card>
    ))
    }
    </div>
  )
} 