import React from 'react'
import { Table } from 'react-bootstrap'

export default function Developers(){

  return(
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>email</th>
      <th>Time of work</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Task 1</td>
      <td>Otto</td>
      <td>12</td>
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
  )
}