
import React, { useEffect } from 'react'
import { Accordion, Button, Card, Dropdown, Tab, Table, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { reqreadplannedTaskF, reqreadtask,reqreadInProgresTaskF, reqreadDoneTaskF } from '../../../Utils/redux/actions'
import '../../../Styles/styleTasks.css'

export default function Tasks(){
  const dispatch = useDispatch()
  // const statusTask = useSelector((state) => state.setTask.status)
  const readedTasks = useSelector((state) => state.setTask.idforproj)
  const readplannedTask = 'planned'
  const readInProgresTask = 'inprogress'
  const readDoneTask = 'done'

  useEffect(() => {dispatch(reqreadtask(readedTasks))}, [readedTasks])
  useEffect(() => {dispatch(reqreadplannedTaskF(readplannedTask, readedTasks))}, [])
  useEffect(() => {dispatch(reqreadInProgresTaskF(readInProgresTask, readedTasks))}, [])
  useEffect(() => {dispatch(reqreadDoneTaskF(readDoneTask, readedTasks))}, [])

  const readed_tasks = useSelector((state) => state.setTask.readedTask)
  const readed_planned_tasks = useSelector((state) => state.setTask.planned)
  const readed_inprogress_tasks = useSelector((state) => state.setTask.inprogress)
  const readed_done_tasks = useSelector((state) => state.setTask.done)

  // console.log("all tasks"+ readed_tasks)
  // console.log("planned tasks" + readed_planned_tasks)
  // console.log("inprogress tasks" + readed_inprogress_tasks)

  return(
    <div className ='container111'>

      <Tabs style = {{textAlign: 'center'}} defaultActiveKey="home" id="uncontrolled-tab-example" className="tab1">
         
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
              <Card.Footer>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><Button>Edit</Button></Dropdown.Item>
                  <Dropdown.Item><Button>Done</Button></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

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
                <Card.Footer>
  
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><Button>Edit</Button></Dropdown.Item>
                  <Dropdown.Item><Button>Done</Button></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
  
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
                <Card.Footer>
  
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><Button>Edit</Button></Dropdown.Item>
                  <Dropdown.Item><Button>Done</Button></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
  
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
              <Card.Footer>

              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item><Button>Edit</Button></Dropdown.Item>
                  <Dropdown.Item><Button>Done</Button></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item><Button>Delete</Button></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

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
 

 