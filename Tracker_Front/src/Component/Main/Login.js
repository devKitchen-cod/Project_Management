import React, { useEffect, useState } from 'react'
import {Form, Button} from 'react-bootstrap/'
import { connect, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { LOGIN, SETEMAIL, SETPASSWORD } from '../../Utils/redux/redux-types'
import { reqlogin } from '../../Utils/redux/actions';



import f8 from '../../Styles/img/f8.svg'
import '../../Styles/styleLogin.css'
   
const mapDispatchToProps = {
  reqlogin,
};
const mapStateToProps = (state) => {
  return {
    store: state.reducer.success
  }
};

 function LogForm(){ 
  const dispatch = useDispatch()
  const history = useHistory();
  
  const [stateEmail, setEmail] = useState("")
  const [statePassword, setPassword] = useState("")

  const state = useSelector((state) => state)
  const email = useSelector((state) => state.setAuth.email)
  const password = useSelector((state) => state.setAuth.password)
  
  const obj = {email: email, password: password}

  const handleDispatch = _event => {
  dispatch({type: SETEMAIL, payload: stateEmail})
  dispatch({type: SETPASSWORD, payload: statePassword})
}

  useEffect(() => {
    if(state.reducer.success){
      dispatch({type: LOGIN, payload: true })
      history.push('/startp') 
    }
  }, [state.reducer.success])

  const handlesub = _event => {
    if(obj.email, obj.password === ''){
      alert('fild form');
    }else{
    dispatch(reqlogin(obj))
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

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree"  onChange ={handleDispatch}/>
          </Form.Group>

          <Button variant="primary" onClick={handlesub}>Sign in</Button>
          </div>
          </div>
      </Form>

    </>

      
    



      )
}

export default connect(mapStateToProps, mapDispatchToProps)(LogForm);

