import React from 'react';
import '../../../../Styles/styleCreatePMProfile.css'
import { Form, Col } from 'react-bootstrap';
import devimg2 from '../../../../Styles/img/dev4.jpg'
import devimg3 from '../../../../Styles/img/dev5.jpg'
import { Button } from 'react-bootstrap';

const CreatePMProfile = () => {
  return (
    <div className = 'pm-container'>
      <div className = 'reg-section'>
        <h1 className= 'reg-logo'>startUP!Factory - Creator</h1>
        <h3 className = 'reg-text'>Sign up for your Profile for Creator</h3>
        
        <div className = 'reg-form'>
          <Form.Group className="mb-3"  controlId="formGridAddress2">
            
          <Form.Control type="Firstname" placeholder="Firstname" />
        </Form.Group>
        
          <Form.Group className="mb-3"  controlId="formGridAddress2">
          
          <Form.Control type="Lastname" placeholder="Lastname" />
        </Form.Group>
        
        <Form.Group className="mb-3" as={Col} controlId="formGridCity">
          
          <Form.Control type="Country" placeholder="Country"/>
        </Form.Group>

        <Form.Group className="mb-3" as={Col} controlId="formGridCity" /*onChange = {e => setProffetion(e.target.value)}*/>
        
        <Form.Select >
          <option >Work experience</option>
          <option value="CEO">0-2 years</option>
          <option value="DevOps">2-5 years</option>
          <option value="Developer">5-10 years</option>
        </Form.Select>
        </Form.Group>

        <Button  variant="outline-primary">Create</Button>
        </div>
      </div>
      <img className = 'img-section1' src = {devimg2}/>
      <img className = 'img-section2' src = {devimg3}/>
      
    </div>
  );
};

export default CreatePMProfile;