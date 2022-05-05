import React, { useState } from 'react';
import { Form, Col } from 'react-bootstrap';
import '../../../../Styles/styleCreateDevProfile.css'
import devimg2 from '../../../../Styles/img/dev4.jpg'
import devimg3 from '../../../../Styles/img/dev5.jpg'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { FloatingLabel } from 'react-bootstrap';
import { create_profile_dev } from '../../../../store/operations/profile';
import { ROUTES } from '../../../../constans/constans';

const CreateDevProfile = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  const [FirstName, setFirstName] = useState("")
  const [LastName, setLastName] = useState("")
  const [Country, setCountry] = useState("")
  const [WorkExp, setWorkExp] = useState("")
  const [Proffetion, setProff] = useState("")
  const [Stack, setStack] = useState('')

  const obj = {fname: FirstName, lname: LastName, country: Country, workexp: WorkExp, proff: Proffetion, stack: Stack}

  const handleCreateProfile = () => {
    if (obj.fname, obj.lname, obj.country, obj.workexp === '') {
      alert('fild form');
    }else{
      dispatch(create_profile_dev(obj, ROUTES.PROFILE.CREATING_PROFILE.CREATE_DEVELOPER_PROFILE))
    }
  }

  return (
    <div className = 'dev-container'>
      <div className = 'reg-section'>
        <h1 className= 'reg-logo'>startUP!Factory - Developer</h1>
        <h3 className = 'reg-text'>Sign up for your Profile for Developers</h3>
        
        <div className = 'reg-form'>
          <Form.Group className="mb-3"  controlId="formGridAddress2" onChange = {e => setFirstName(e.target.value)}>
          <Form.Control type="Firstname" placeholder="Firstname" />
        </Form.Group>
        
          <Form.Group className="mb-3"  controlId="formGridAddress2" onChange = {e => setLastName(e.target.value)}>        
          <Form.Control type="Lastname" placeholder="Lastname" />
        </Form.Group>
        
        <Form.Group className="mb-3" as={Col} controlId="formGridCity" onChange = {e => setCountry(e.target.value)}>          
          <Form.Control type="Country" placeholder="Country"/>
        </Form.Group>

        <Form.Group className="mb-3" as={Col} controlId="formGridCity" onChange = {e => setWorkExp(e.target.value)}>
        <FloatingLabel controlId="floatingSelect" label="How much experience do you have?">
          <Form.Select aria-label="Floating label select example">
          <option value="CEO">0-2 years</option>
          <option value="DevOps">2-5 years</option>
          <option value="Developer">5-10 years</option>
          </Form.Select>
        </FloatingLabel>
        </Form.Group>

       <Form.Group className="mb-3" as={Col} controlId="formGridCity" onChange = {e => setProff(e.target.value)}>
       <FloatingLabel controlId="floatingSelect" label="Choose your development direction">
          <Form.Select aria-label="Floating label select example">
          <option value="CEO">Frontend developer</option>
          <option value="DevOps">Backend Developer</option>
          <option value="Developer">Fullstack Developer</option>
          </Form.Select>
        </FloatingLabel>
       </Form.Group>

       <Form.Group className="mb-3"  controlId="formGridAddress2" onChange = {e => setStack(e.target.value)}>        
          <Form.Control type="Lastname" placeholder="Your technology" />
        </Form.Group>

        <Button  variant="outline-primary" onClick = {handleCreateProfile}>Create</Button>

        </div>
        


      </div>
      <img className = 'img-section1' src = {devimg2}/>
      <img className = 'img-section2' src = {devimg3}/>
      
    </div>
  );
};

export default CreateDevProfile;