import { Tab } from 'bootstrap'
import React from 'react'
import { Card, Table, Tabs } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../../../Styles/styleDevelopers.css'
export default function Developers(){
const users = useSelector((state) => state.setTask.allUsers)
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
            {item.proffetion}
            {item.developers_stack}
            {item.sallary}
            {item.current_project}
          </Card.Body>
         
          <Card.Footer>
            {item.email_user}
          </Card.Footer>
        </Card>
         ))}
      </Tab>

     
     
      <Tab eventKey="home1" title="Developers">
        <Card>
          <Card.Header>
            <Card.Title>Dev</Card.Title>
          </Card.Header>
          <Card.Body>

          </Card.Body>
          <Card.Footer>

          </Card.Footer>
        </Card>
      </Tab>
      <Tab eventKey="profile2" title="Dev-Ops">
        <Card>
          <Card.Header>
            <Card.Title>Devops</Card.Title>
          </Card.Header>
          <Card.Body>

          </Card.Body>
          <Card.Footer>
            
          </Card.Footer>
        </Card>
      </Tab>
      <Tab eventKey="contact1" title="CEO">
        <Card>
          <Card.Header>
            <Card.Title>CEO</Card.Title>
          </Card.Header>
          <Card.Body>

          </Card.Body>
          <Card.Footer>
            
          </Card.Footer>
        </Card>
      </Tab>
    </Tabs>
    </div>






//     <Table striped bordered hover>
//   <thead>
//     <tr>
//       <th>#</th>
//       <th>Name</th>
//       <th>email</th>
//       <th>Time of work</th>
      
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>1</td>
//       <td>Task 1</td>
//       <td>Otto</td>
//       <td>12</td>
//     </tr>
//     <tr>
//       <td>2</td>
//       <td>Task 2</td>
//       <td>Thornton</td>
//       <td>5</td>
//     </tr>
//     <tr>
//       <td>3</td>
//       <td>Task 3</td>
//       <td>Devid</td>
//       <td>10</td>
      
//     </tr>
//   </tbody>
// </Table>
  )
}