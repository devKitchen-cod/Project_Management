import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap/'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { LOGIN, SETEMAIL, SETPASSWORD } from '../../Utils/redux/redux-types'
import { reqlogin } from '../../Utils/redux/actions';
import f8 from '../../Styles/img/f8.svg'
import '../../Styles/styleLogin.css'
import { login } from '../../store/operations/auth';
import { ROUTES } from '../../constans/constans';
   
export default function LogForm(){ 
  const dispatch = useDispatch()
  const history = useHistory();
  
  const [stateEmail, setEmail] = useState("")
  const [statePassword, setPassword] = useState("")

  const authenticate = useSelector((state) => state.Auth.authenticate)
  const obj = {email: stateEmail, password: statePassword}

  useEffect(() => {
    if(authenticate == true){            
      history.push('/startp') //...переход по определенному профилю для пользователя 
    }
  }, [authenticate])

  const handlesub = _event => {
    if(obj.email, obj.password === ''){
      alert('fild form');
    }else{
    dispatch(login(obj, ROUTES.AUTH.LOGIN)) //----REQ 
    }  
  }

  return(
    <>
        <Form>
          <div className = 'container'>
          <div className = "pic">
            <img src = {f8}/> 
          </div>
          
            <div className = "some">
          <Form.Group className="mb-3" controlId="formBasicEmail" onChange = {e => setEmail(e.target.value)}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
          </Form.Group>          

          <Form.Group className="mb-3" controlId="formBasicPassword" onChange = {e => setPassword(e.target.value)}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
          </Form.Group>

          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree"  onChange ={handleDispatch}/>
          </Form.Group> */}

          <Button variant="primary" onClick={handlesub}>Sign in</Button>
          </div>
          </div>
      </Form>
    </>
      )
}



