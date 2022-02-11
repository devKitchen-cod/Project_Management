
import React, { useEffect } from 'react'
import { Accordion, Button, Card, Tab, Table, Tabs } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { reqreadplannedTaskF, reqreadtask,reqreadInProgresTaskF, reqreadDoneTaskF } from '../../../Utils/redux/actions'


export default function Tasks(){
  const dispatch = useDispatch()
  // const statusTask = useSelector((state) => state.setTask.status)
  const readedTasks = useSelector((state) => state.setTask.idforproj)
  const readplannedTask = 'planned'
  const readInProgresTask = 'inprogress'
  const readDoneTask = 'done'

  useEffect(() => {
    
    dispatch(
      reqreadtask(readedTasks),
      reqreadplannedTaskF(readplannedTask),
      reqreadInProgresTaskF(readInProgresTask),
      reqreadDoneTaskF(readDoneTask)
      )
  }, [readedTasks])

  const readed_tasks = useSelector((state) => state.setTask.readedTask)
  const readed_planned_tasks = useSelector((state) => state.setTask.planned)
  const readed_inprogress_tasks = useSelector((state) => state.setTask.inprogress)
  const readed_done_tasks = useSelector((state) => state.setTask.done)

  return(
    <div className ='container'>

      <Tabs style = {{textAlign: 'center'}} defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
         <Tab eventKey="home" title="Planned">
            {readed_planned_tasks.map((item) => (
              <Card>
                ---
              </Card>
            ))}
          </Tab>

          <Tab eventKey="profile" title="Done">
              {readed_done_tasks.map((item) => (
                <Card>
                  ---
                </Card>
              ))}
          </Tab>

          <Tab eventKey="profile" title="In Progres">
              {readed_inprogress_tasks.map((item) => (
                <Card>
                  ---
                </Card>
              ))}
          </Tab>
      
          <Tab eventKey="contact" title="All Tasks">
              {readed_tasks.map((item) =>(
              <Card style={{ width: '18rem', margin:'20px'}}>
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

                <Button style = {{margin: '10px'}}>Edit</Button>
                <Button>Delete</Button>
                <Button style= {{margin: '10px'}}>Done</Button>

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
 

 