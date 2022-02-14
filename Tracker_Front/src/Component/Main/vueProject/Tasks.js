
import React, { useEffect, useState } from 'react'
import { Accordion, Button, Card, Dropdown, Tab, Table, Tabs, ProgressBar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { reqreadplannedTaskF, reqreadtask,reqreadInProgresTaskF, reqreadDoneTaskF, reqchangeStatus, stopChange } from '../../../Utils/redux/actions'
import '../../../Styles/styleTasks.css'
import { useHistory } from 'react-router'

export default function Tasks(){
  const dispatch = useDispatch()
  const history = useHistory()
  const readedTasks = useSelector((state) => state.setTask.idforproj)
  const readplannedTask = 'planned'
  const readInProgresTask = 'inprogress'
  const readDoneTask = 'done'
  
  const [status, setStatus] = useState(false)


  useEffect(() => {dispatch(reqreadtask(readedTasks))}, [readedTasks])
  useEffect(() => {dispatch(reqreadplannedTaskF(readplannedTask, readedTasks))}, [])
  useEffect(() => {dispatch(reqreadInProgresTaskF(readInProgresTask, readedTasks))}, [])
  useEffect(() => {dispatch(reqreadDoneTaskF(readDoneTask, readedTasks))}, [])
  const state = useSelector((state) => state)

  const readed_tasks = useSelector((state) => state.setTask.readedTask)
  const readed_planned_tasks = useSelector((state) => state.setTask.planned)
  const readed_inprogress_tasks = useSelector((state) => state.setTask.inprogress)
  const readed_done_tasks = useSelector((state) => state.setTask.done)  

  useEffect(() =>{
    console.log('state = '+ state.reducer.change)
    if(state.reducer.change == true){  
      dispatch(
        reqreadplannedTaskF(readplannedTask, readedTasks)     
      ) 
      history.push('/vue_project')
      dispatch(stopChange())
    }
  }, [state.reducer.change])

  useEffect(() =>{
    if(state.reducer.change == true){  
      dispatch(
        reqreadInProgresTaskF(readInProgresTask, readedTasks)
      ) 
      history.push('/vue_project')
      dispatch(stopChange())
    }
  }, [state.reducer.change])

  useEffect(() =>{
    if(state.reducer.change == true){  
      dispatch(reqreadDoneTaskF(readDoneTask, readedTasks)) 
      history.push('/vue_project')
      dispatch(stopChange())
    }
  }, [state.reducer.change])


  const handle_Planned = (id) => {
    dispatch(reqchangeStatus(id, readplannedTask))
  }

  const handle_Done =(id)=>{
    dispatch(reqchangeStatus(id, readDoneTask))
  }
  
  const handle_InProress =(id)=>{
    dispatch(reqchangeStatus(id, readInProgresTask))
  }


  

  return(
    <div className ='container111'>
      <Tabs style = {{textAlign: 'center'}} defaultActiveKey="home" id="uncontrolled-tab-example" className="tab1" transition = {true}>
         <Tab eventKey="home" title="Planned" className = 'tab11'>
            {readed_planned_tasks.map((item) => (
              <Card className = 'tab-plan'>
              <Card.Body>
                <Card.Title>{item.name_task}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><h5>Time:</h5> {item.planned_time_task}</Card.Subtitle>
                <Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      {item.description_task}
                    </Accordion.Body>
                  </Accordion.Item>  
                </Accordion>
                </Card.Text>
              </Card.Body>
              <Card.Footer className = 'footer'>

              <Dropdown className = 'btn'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {/* <Dropdown.Item><Button onClick = {() => handle_Planned(item.id)}>Planned</Button></Dropdown.Item> */}
                  <Dropdown.Item><Button onClick = {() => handle_Done(item.id)}>Done</Button></Dropdown.Item>                  
                  <Dropdown.Item><Button onClick = {() => handle_InProress(item.id)}>In proress</Button></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              
              <ProgressBar now ={50} className = 'pro'/>
              
              </Card.Footer>
            </Card>
            ))}
          </Tab>
          
          <Tab eventKey="profile" title="Done">
              {readed_done_tasks.map((item) => (
                <Card className = 'tab-plan'>
                <Card.Body>
                  <Card.Title>{item.name_task}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><h5>Time:</h5> {item.planned_time_task}</Card.Subtitle>
                  <Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        {item.description_task}
                      </Accordion.Body>
                    </Accordion.Item>  
                  </Accordion>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className = 'footer'>

              <Dropdown className = 'btn'>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  ...
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item><Button onClick = {() => handle_Planned(item.id)}>Planned</Button></Dropdown.Item>
                  {/* <Dropdown.Item><Button onClick = {() => handle_Done(item.id)}>Done</Button></Dropdown.Item>                   */}
                  <Dropdown.Item><Button onClick = {() => handle_InProress(item.id)}>In proress</Button></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <ProgressBar now ={30} className = 'pro'/>
              </Card.Footer>
              </Card>
              ))}
          </Tab>

          <Tab eventKey="profile1" title="In Progress">
              {readed_inprogress_tasks.map((item) => (
                <Card className = 'tab-plan'>
                <Card.Body>
                  <Card.Title>{item.name_task}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted"><h5>Time:</h5> {item.planned_time_task}</Card.Subtitle>
                  <Card.Text>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Description</Accordion.Header>
                      <Accordion.Body>
                        {item.description_task}
                      </Accordion.Body>
                    </Accordion.Item>  
                  </Accordion>
                  </Card.Text>
                </Card.Body>
                <Card.Footer className = 'footer'>

                <Dropdown className = 'btn'>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    ...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item><Button onClick = {() => handle_Planned(item.id)}>Planned</Button></Dropdown.Item>
                  <Dropdown.Item><Button onClick = {() => handle_Done(item.id)}>Done</Button></Dropdown.Item>                  
                  {/* <Dropdown.Item><Button onClick = {() => handle_InProress(item.id)}>In proress</Button></Dropdown.Item> */}
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>

                <ProgressBar now ={90} className = 'pro'/>

                </Card.Footer>
              </Card>
              ))}
          </Tab>
      
          <Tab eventKey="contact" title="All Tasks">
              {readed_tasks.map((item) =>(
              <Card className = 'tab-plan'>
              <Card.Body>
                <Card.Title>{item.name_task}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><h5>Time:</h5> {item.planned_time_task}</Card.Subtitle>
                <Card.Text>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Description</Accordion.Header>
                    <Accordion.Body>
                      {item.description_task}
                    </Accordion.Body>
                  </Accordion.Item>  
                </Accordion>
                </Card.Text>
              </Card.Body>
              <Card.Footer className = 'footer'>

                <Dropdown className = 'btn'>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    ...
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                  <Dropdown.Item><Button onClick = {() => handle_Planned(item.id)}>Planned</Button></Dropdown.Item>
                  <Dropdown.Item><Button onClick = {() => handle_Done(item.id)}>Done</Button></Dropdown.Item>                  
                  <Dropdown.Item><Button onClick = {() => handle_InProress(item.id)}>In proress</Button></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                <ProgressBar now ={100} className = 'pro'/>
              </Card.Footer>
            </Card>

          ))}
          </Tab>
          
      </Tabs>
    </div>
  )
}
  


  


//{item.id}
//{item.name_task}
//{item.description_task}
//{item.project_task}
//{item.planned_time_task}
//{item.user_task}
 

 