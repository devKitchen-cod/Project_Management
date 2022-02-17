import { Tab } from 'bootstrap'
import React, { useEffect } from 'react'
import { Card, Table, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import '../../../Styles/styleDevelopers.css'
import { reqGetAllCEO, reqGetAllDevelopers, reqGetAllDevOps } from '../../../Utils/redux/actions'
//J$eaT2msVUX!7-)

export default function Developers(){

  const dispatch = useDispatch()
  const ceo = 'CEO'
  const devops = 'DevOps'
  const developer = 'Developer'

  useEffect(() => {
    dispatch(reqGetAllCEO(ceo))
  }, [])
  useEffect(() => {
    dispatch( reqGetAllDevOps(devops))
  }, [])
  useEffect(() => {
    dispatch(reqGetAllDevelopers(developer))
  }, [])
  

  const users = useSelector((state) => state.setTask.allUsers)
  const ceoUsers = useSelector((state) => state.setAuth.ceo)
  const devopsUsers = useSelector((state) => state.setAuth.devops)
  const developerUsers = useSelector((state) => state.setAuth.developer)

  console.log(ceoUsers)
  // devopsUsers, developerUsers

  return(

    <div>
     <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="All">
        {users.map((item) => (
        <Card className ='some123123'>
          <Card.Header>
            <Card.Title>{item.name_user}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style ={{display: 'inline-flex'}}>
            I am: {item.proffetion}
            </div>
            <div>
            My stack: {item.developers_stack}
            </div>
            <div>
            My sallary: {item.sallary}$/hr
            </div>
            <div>
            My current project: {item.current_project}
            </div>
          </Card.Body>
         
          <Card.Footer>
            Get contackt with me: {item.email_user}
          </Card.Footer>
        </Card>
         ))}
      </Tab>

     
      <Tab eventKey="home1" title="Developers">
      {developerUsers.map((item) => (
        <Card className ='some123123'>
          <Card.Header>
            <Card.Title>{item.name_user}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style ={{display: 'inline-flex'}}>
            I am: {item.proffetion}
            </div>
            <div>
            My stack: {item.developers_stack}
            </div>
            <div>
            My sallary: {item.sallary}$/hr
            </div>
            <div>
            My current project: {item.current_project}
            </div>
          </Card.Body>
         
          <Card.Footer>
            Get contackt with me: {item.email_user}
          </Card.Footer>
        </Card>
         ))}
      </Tab>
      <Tab eventKey="profile2" title="Dev-Ops">
      {devopsUsers.map((item) => (
        <Card className ='some123123'>
          <Card.Header>
            <Card.Title>{item.name_user}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style ={{display: 'inline-flex'}}>
            I am: {item.proffetion}
            </div>
            <div>
            My stack: {item.developers_stack}
            </div>
            <div>
            My sallary: {item.sallary}$/hr
            </div>
            <div>
            My current project: {item.current_project}
            </div>
          </Card.Body>
         
          <Card.Footer>
            Get contackt with me: {item.email_user}
          </Card.Footer>
        </Card>
         ))}
      </Tab>
      <Tab eventKey="contact1" title="CEO">
      {ceoUsers.map((item) => (
        <Card className ='some123123'>
          <Card.Header>
            <Card.Title>{item.name_user}</Card.Title>
          </Card.Header>
          <Card.Body>
            <div style ={{display: 'inline-flex'}}>
            I am: {item.proffetion}
            </div>
            <div>
            My stack: {item.developers_stack}
            </div>
            <div>
            My sallary: {item.sallary}$/hr
            </div>
            <div>
            My current project: {item.current_project}
            </div>
          </Card.Body>
         
          <Card.Footer>
            Get contackt with me: {item.email_user}
          </Card.Footer>
        </Card>
         ))}
      </Tab>
    </Tabs>
    </div>
  )
}