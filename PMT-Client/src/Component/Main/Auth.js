import React, { useEffect, useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import '../../Styles/styleAuth.css'
import f11 from '../../Styles/img/f11.svg'
import { auth, req_auth } from '../../store/operations/auth';
import { ROUTES } from '../../constans/constans';

 export default function Auth(){
  const dispatch = useDispatch()
  const history = useHistory();

  const [stateEmail, setEmail] = useState("")
  const [statePassword, setPassword] = useState("")
  const [stateName, setName] = useState("")
 
  const authenticate = useSelector((state) => state.Auth.authenticate)
  const obj = {email: stateEmail, password: statePassword, name: stateName}

  useEffect(() => {
    if(authenticate == true){
      // alert('Authorization was successful!!!');            
      history.push('/create_profiles_page') //Переход на создание профиля
    }
  }, [authenticate])

  const handleSub = _event => {
    if(obj.email, obj.password, obj.name === ''){
      alert('fild form');
    }else{
      dispatch(auth(obj, ROUTES.AUTH.SIGNUP)) //-----REQ
    }
  }

  return (
    <div className = "container123321">
      <div className = 'sub-container'>
      
      <Form.Group className="mb-3"  controlId="formGridAddress1" onChange= {e => setName(e.target.value)}>
        <Form.Label>Name</Form.Label>
       <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      
      <Form.Group className="mb-3"  as={Col} controlId="formGridEmail"  onChange = {e => setEmail(e.target.value)}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      
      <Form.Group className="mb-3" as={Col} controlId="formGridPassword" onChange = {e => setPassword(e.target.value)}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>

      <Form.Group  className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I agree with the terms of use" />
      </Form.Group>

      <Button variant="primary" onClick ={handleSub}>Sign up</Button>
    
     </div>
    <div className = 'ee'><img src = {f11}/></div>
  </div>
  )
}

