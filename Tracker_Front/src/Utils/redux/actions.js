import axios from 'axios'
import { GETUSERS, READTASK, SETNAMETASK, SETPROJECT } from './redux-types'

const start_login = () => {
  return {type: 'start_req'}
}

const success_login = () =>{
  return{type: 'req_success'}
}

const err_login = () => {
  return {type: 'err_req'}
}

const success_create = () =>{
  return{type: 'success_create'}
}

const err_create = () => {
  return {type: 'err_create'}
}
const deleted = () => {
  return{type: 'deleted'}
}

export const reqlogin = (obj) => {
  return(dispatch) => {
    dispatch(start_login());
    axios({
      method: "POST",
      url: "http://localhost:8080/api/login",
      data: {
        email: obj.email,
        password: obj.password
      }
    })
    .then(
      (data) => dispatch(success_login()),
      (err) => dispatch(err_login(err))
    )
  }
}

export const reqauth = (obj) => {
  return (dispatch) => {
    dispatch(start_login());
    axios({
          method: "POST",
          url: "http://localhost:8080/api/user",
          data: {
            name: obj.name,
            email: obj.email,  
            password: obj.password
          }
        })
        .then (
          (data) => dispatch(success_login()),
          (err) => dispatch(err_login(err))
        )
  }  
}

export const reqcreate = (obj) => {
      return (dispatch) => {
          axios({
            method: "POST",
            url: "http://localhost:8080/api/project",
            data: {
              name: obj.name_of_project,
              user: obj.email  
            }
          })
          .then (
            dispatch(success_create()),
            (err) => dispatch(err_create(err))
          )}
}


export const reqDeleteProject = (name_project, email) => {
  return (dispatch) => {
    console.log('action ----'+name_project, email)
    axios({
      method: "POST",
      url: "http://localhost:8080/api/delete-project",
      data:{name: name_project, user: email}      
    })
    .then(      
      dispatch(deleted())

    )
  }
}


export const reqsettimeproject = (obj) => {
      return (dispatch) => {
          axios({
            method: "POST",
            url: "http://localhost:8080/api/tracker",
            data: {
              nameProject: obj.nameProject,     
              workTime  : obj.workTime
            }
           })
           .then (
             dispatch(success_create()),
             (err) => dispatch(err_create(err))
          )}
}

export const notcreate = () => {
      return(dispatch) => {
        dispatch(err_create())
      }
}

export const reqsetproject = (obj) => {
      return (dispatch) => {
        axios({
          method: "POST",
          url: "http://localhost:8080/api/allproj",
          data: {email: obj.email}
        })
        .then((res) => {
          dispatch({type: SETPROJECT, payload: res.data})
        }) 
      }
}

export const reqcreatetask = (obj) => {
  return(dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/task-create",
      data: {name_of_task: obj.nameTask, time_for_task: obj.timeTask, descripton_of_task: obj.textTask, project_task: obj.project_task, user_task: obj.user_task, status_task:obj.status_task }
    })
    .then(
      dispatch(success_create()),
      (err) => dispatch(err_create(err))
   )
  }
}

export const reqGetAllUsers = () =>{
  return(dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:8080/api/allusers",
    })
    .then((res) => {
      dispatch({type: GETUSERS, payload: res.data})
    })
  }
}

export const reqreadtask = (readedTasks) => {
  return (dispatch) => {
      axios({
        method: "POST",
        url: "http://localhost:8080/api/task-read",
       data: {tasks: readedTasks}
      })
      .then((res) => {
        dispatch({type: READTASK, payload: res.data})
      })
  }
}

export const reqreadplannedTaskF= (readplannedTask) =>{
  return(dispatch)=>{
    axios({
      method: "POST",
      url: "http://localhost:8080/api/task-planned",
     data: {tasks: readplannedTask}
    })
  }
}

export const reqreadInProgresTaskF= (readInProgresTask) =>{
  return(dispatch)=>{
    axios({
      method: "POST",
      url: "http://localhost:8080/api/task-read-inprogress",
     data: {tasks: readInProgresTask}
    })
  }
}

export const reqreadDoneTaskF= (readDoneTask) =>{
  return(dispatch)=>{
    axios({
      method: "POST",
      url: "http://localhost:8080/api/task-read-done",
     data: {tasks: readDoneTask}
    })
  }
}


