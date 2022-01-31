import React, { useEffect, useState } from 'react'
import {Form, Row, Col, Button} from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { LOGIN, SETEMAIL, SETNAME, SETPASSWORD } from '../../Utils/redux/redux-types';
import { reqauth } from '../../Utils/redux/actions';

import '../../Styles/styleAuth.css'
import f11 from '../../Styles/img/f11.svg'

const mapDispatchToProps = {
  reqauth,
};
const mapStateToProps = (state) => {
  return {
    store: state.reducer.success
  }
};
function Auth(){
  const dispatch = useDispatch()
  const history = useHistory();
  const state = useSelector((state) => state)

  const [stateEmail, setEmail] = useState("")
  const [statePassword, setPassword] = useState("")
  const [stateName, setName] = useState("")

  const email = useSelector((state) => state.setAuth.email)
  const password = useSelector((state) => state.setAuth.password)
  const name = useSelector((state) => state.setAuth.name)


  const handleDispatch = _event => {
  dispatch({type: SETEMAIL, payload: stateEmail})
  dispatch({type: SETPASSWORD, payload: statePassword})
  dispatch({type: SETNAME, payload: stateName})

}
  const obj = {email: email, password: password, name: name}
  
  useEffect(() => {
    if(state.reducer.success){
      alert('Authorization was successful!!!');
      dispatch({type: LOGIN, payload: true })
      history.push('/startp')
    }
  })
  const handleSub = _event => {
    if(obj.email, obj.password, obj.name === ''){
      alert('fild form');
    }else{
      dispatch(reqauth(obj))
    }
  }

  return (
    <div className = "container123321">
      <div className = 'sub-container'>
      
      <Form.Group className="mb-3"  as={Col} controlId="formGridEmail"  onChange = {e => setEmail(e.target.value)}>
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      
      <Form.Group className="mb-3" as={Col} controlId="formGridPassword" onChange = {e => setPassword(e.target.value)}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formGridAddress1" onChange= {e => setName(e.target.value)}>
        <Form.Label>Name</Form.Label>
       <Form.Control type="name" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3"  controlId="formGridAddress2">
        <Form.Label>Surname</Form.Label>
        <Form.Control type="name" placeholder="Surname" />
      </Form.Group>
      
      <Form.Group className="mb-3" as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="city" placeholder="City"/>
      </Form.Group>
      
      <Form.Group  className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="I agree with the terms of use" onChange = {handleDispatch}/>
      </Form.Group>
      <Button variant="primary" onClick ={handleSub} >Sign up</Button>
    
     </div>
    <div className = 'ee'><img src = {f11}/></div>
  </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
