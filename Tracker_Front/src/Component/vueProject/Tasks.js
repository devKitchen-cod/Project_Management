
import React, { useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { useDispatch } from 'react-redux'

export default function Tasks(){

  
 

  return(
    <div>
 
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Task Name</th>
      <th>chtotot</th>
      <th>Time for task</th>
      
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>1</td>
      <td>Task 1</td>
      <td>Otto</td>
      <td>12    <Button>Added</Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Task 2</td>
      <td>Thornton</td>
      <td>5</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Task 3</td>
      <td>Devid</td>
      <td>10</td>
      
    </tr>
  </tbody>
</Table>
</div>
  )
}