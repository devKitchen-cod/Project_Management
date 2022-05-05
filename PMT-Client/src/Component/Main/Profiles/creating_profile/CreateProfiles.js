import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import '../../../../Styles/styleCreateProfiles.css'
import f8 from '../../../../Styles/img/f10.jpg'
import devimg from '../../../../Styles/img/dev.jpg'
import pmimg from '../../../../Styles/img/PM.jpg'
import { useHistory } from 'react-router';

const CreateProfiles = () => {  console.log("dev")
  const history = useHistory()
  
  const handle_crete_dev_profile = () => {

    history.push('/create_dev_profile')
  }

  const handle_crete_pm_profile = () => {
    history.push('/create_pm_profile')
  }

  return (
    <div className = "profiles-container">
      
      <div className = 'hello-section'>
            
            <div className= "profile-text-group">
               <h1 className = 'profile-h'>Работайте в команде</h1> 
               <h2 className = 'profile-p'>Приймите участие в создании проекта и выводите продуктивность на новый уровень собственным уникальным способом вместе с startUP! Factory.</h2>
            </div>

            {/* <img className = "img1" src = {f8}/>    */}
      </div>    

      <div className = 'cards-section'>

        <div className = 'dev-card'>
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src={devimg} />
            <Card.Body>
              <Card.Title>Developer Profile</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Developer</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <div><Button onClick = {handle_crete_dev_profile} variant="outline-primary" size = "lg">Get Profile</Button></div>
              
            </Card.Body>
          </Card>
        </div>

        <div className  = 'pm-card'>
        <Card style={{ width: '25rem' }}>
        <Card.Img variant="top" src={pmimg}/>
          <Card.Body>
            <Card.Title>Creator Profile</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Project Manager</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              
                            
            </Card.Text>
            <div><Button onClick = {handle_crete_pm_profile} variant="outline-primary" size = "lg">Get Profile</Button></div>
            
          </Card.Body>
        </Card>
        </div>
      </div>

    </div>
  );
};

export default CreateProfiles;