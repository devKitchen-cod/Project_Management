import React, { useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Form, Modal, ModalBody, ModalDialog, ModalFooter, Tab, Tabs } from 'react-bootstrap'
import { connect, useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { CREATETASK, SETNAMETASK, SETPROJECTFORTASK, SETTEXTTASK, SETTIMETASK, SETUSERTASK } from '../../Utils/redux/redux-types'
 import NavBarF from '../NavBarForAuth'
import Developers from '../vueProject/Developers'
import Tasks from '../vueProject/Tasks'
import {reqcreatetask, reqGetAllUsers, reqreadtask} from '../../Utils/redux/actions'

const mapDispatchToProps = {
  reqcreatetask
};
const mapStateToProps = (state) => {
  return {
    store: state.reducer.success
  }
};

function Vue_Project(){  
    
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    const [isDisable, setDis] = useState(true)
    const [nameTask, setNameTask] = useState("")
    const [timeTask, setTimeTask] = useState("")
    const [textTask, setTextTask] = useState("")

    const handleSub = _event => {
      dispatch({type: SETNAMETASK, payload: nameTask})
      dispatch({type: SETTIMETASK, payload: timeTask})
      dispatch({type: SETTEXTTASK, payload: textTask})  
    }

    useEffect(()=>{
      if(nameTask !== '')setDis(false)
      else {setDis(true); }
    },[nameTask])

    const nameProject = useSelector((state) => state.setProject.list_of_projects)

    const nameTask1 = useSelector((state) => state.setTask.nameTask)
    const timeTask1 = useSelector((state) => state.setTask.timeTask)
    const textTask1 = useSelector((state) => state.setTask.textTask)
    
    const users = useSelector((state) => state.setTask.allUsers)
    const selectednameproj = useSelector((state) => state.setTask.selectedProject)
    const selectedusertask = useSelector((state) => state.setTask.selectedUser)

    const obj = {nameTask: nameTask1, timeTask: timeTask1, textTask: textTask1, project_task: selectednameproj, user_task: selectedusertask}
    
    const handleDispatch = _event => {
      if(obj.nameTask, obj.timeTask, obj.textTask === ''){
        alert('fild form');
      }else{
        dispatch(reqcreatetask(obj))  
        handleClose()
        handle_bool()
      }        
    }

    const handle_bool = _event => {
      console.log('reeeeaaad')
      alert('Created !')
      dispatch(reqreadtask())
    }
    const [show, setShow] = useState(false)
    const handleClose = _event => {
      setShow(false)
      setNameTask('')
      setTextTask('')
      setTimeTask('') 
    } 
    const handleShow = _event =>{
      setShow(true)
      dispatch(reqGetAllUsers(), [])
    } 

  return(
  <div><NavBarF/>
    <div style = {{textAlign: 'center'}}>
      <div className = 'editButton' style = {{display:'inline' }}><Button >Edit Task</Button></div>
          <div className = 'createButton' style = {{display:'inline', padding: '10px'}}>
          
          <Button onClick = {handleShow}>Create Task</Button>
          
          <Modal show = {show} onHide = {handleClose} backdrop="static"
            keyboard={false}>

            <Modal.Header closeButton>
              <Modal.Title>Create Task 
                <Form.Group onChange = {e => setNameTask(e.target.value)}>
                  <Form.Control type="text" placeholder="New Task"  />
                </Form.Group>
              </Modal.Title>
            </Modal.Header>

            <ModalBody>
              Task
              <Form.Group onChange = {e => setTextTask(e.target.value)}>
                <Form.Control type="text" placeholder="Task"/>
                </Form.Group>
              
                Time for task
                <Form.Group onChange = {e => setTimeTask(e.target.value)}>
                <Form.Control type="text" placeholder="Time"/>
                </Form.Group>
              
                Project
                <Form.Select defaultValue = 'Choose Project' onChange = {e => dispatch({type: SETPROJECTFORTASK, payload: e.target.value})}>
                  <option disabled>Choose Project</option>   
                  {nameProject.map((item) => (
                  <option value = {item.name_project}>{item.name_project}</option>
                ))} </Form.Select>

              Users
              <Form.Select defaultValue = 'Choose User' onChange = {e => dispatch({type: SETUSERTASK, payload: e.target.value})}>
              <option disabled>Choose User</option>
                {users.map((item) => (<option value ={item.name_user}>{item.name_user}</option>))}</Form.Select>
              </ModalBody>

            <ModalFooter>
            <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSub} >
                Save 
              </Button>
              <Button variant="primary" disabled = {isDisable} onClick={handleDispatch} >
                Confirm
              </Button>
            </ModalFooter>  

          </Modal>
        </div>
        <div className = 'findButton' style = {{display:'inline'}}> <Button >Find Task</Button></div>

      </div>
      <div style = {{marginLeft:"300px", marginRight:"300px"}}> 
        <Tabs style = {{textAlign: 'center'}} defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
          
          <Tab eventKey="home" title="Tasks">
            <Tasks/>
          </Tab>

          <Tab eventKey="profile" title="Developers">
              <Developers/>
          </Tab>
      
          <Tab eventKey="contact" title="Description">
              ggg3
            </Tab>
        </Tabs>
      </div>
    </div>
    
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Vue_Project);