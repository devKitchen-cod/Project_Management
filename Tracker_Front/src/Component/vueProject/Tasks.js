
import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {reqreadtask} from '../../Utils/redux/actions'

export default function Tasks(){
  const dispatch = useDispatch()
  dispatch(reqreadtask())
  const readed_tasks = useSelector((state) => state.setTask.readedTask)
  return(
    <div>
 
    <Table striped bordered hover>
  <thead>
   
    <tr>
      <th>#</th>
      <th>Task Name</th>
      <th>Description</th>
      <th>Time for task</th>
    </tr>
  </thead>

  {readed_tasks.map((item) => (
    
    <tbody>
    <tr>
      <td>1</td>
      <td>{item.name_task}</td>
      <td>Otto</td>
      <td>12    <Button>Added</Button></td>
    </tr>
  </tbody>

  ))}



  

</Table>

</div>
  )
}