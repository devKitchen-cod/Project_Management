
import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { reqreadtask } from '../../Utils/redux/actions'


export default function Tasks(){
  const dispatch = useDispatch()

  const idproj = useSelector((state) => state.setTask.idforproj)
  console.log("id in Tasks", idproj)
  const obj = {id: idproj}
  console.log("obj", obj)
  
  useEffect(() => {

    dispatch(reqreadtask(obj))

  }, [])

  const readed_tasks = useSelector((state) => state.setTask.readedTask)

  return(
    <div>
 
    <Table striped bordered hover>
  <thead>
   
    <tr>
      <th style = {{textAlign: 'center'}}>ID</th>
      <th style = {{textAlign: 'center'}}>Task Name</th>
      <th style = {{textAlign: 'center'}}>Description</th>
      <th style = {{textAlign: 'center'}}>Project</th>
      <th style = {{textAlign: 'center'}}>Time for task</th>
      <th style = {{textAlign: 'center'}}>Task creator</th>
      
    </tr>
  </thead>

  {readed_tasks.map((item) => (
    
    <tbody>
    <tr>
      <td style = {{textAlign: 'center'}}>{item.id}</td>
      <td style = {{textAlign: 'center'}}>{item.name_task}</td>
      <td style = {{textAlign: 'center'}}>{item.description_task}</td>
      <td style = {{textAlign: 'center'}}>{item.project_task}</td>
      <td style = {{textAlign: 'center'}}>{item.planned_time_task}</td>
      <td style = {{textAlign: 'center'}}>{item.user_task}</td>
    </tr>
  </tbody>

  ))}

</Table>

</div>
  )
}