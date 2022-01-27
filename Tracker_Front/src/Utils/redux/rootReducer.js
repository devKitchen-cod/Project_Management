import { CREATETASK, GETUSERS, LOGIN, LOGOUT, SETEMAIL, SETNAME, SETNAMEOFPROJECT, SETNAMETASK, SETPASSWORD, SETPROJECT, SETPROJECTFORTASK, SETTEXTTASK, SETTIMETASK, SETPROJECTTIME, READTASK, SETUSERTASK, SETTASKFORTRACKING, SETIDPRO  } from "./redux-types";
import { combineReducers } from "redux"

const init = {
  isAuth: false
}
function enterReducer(state = init, action){
  switch (action.type) {
    case LOGIN:{     
      return {...state, isAuth: action.payload}
    }
    case LOGOUT:{
      const user = action.playload
      return[...state, user]
    }  
    default:return state 
  }
}
const init_auth ={
  email: '',
  name: '',
  password: ''
}
function Auth(state = init_auth, action){
  switch(action.type){
    case SETEMAIL:{
      return {...state, email: action.payload}
    }
   case SETNAME: {
      return {...state, name: action.payload}
  }
  case SETPASSWORD: {
    return {...state, password: action.payload}
  }
  default: return state 
  }
}


const init_name_of_project = {
  name_of_project: '',
  list_of_projects: [],
  time_of_project: 0
}
function setProject( state = init_name_of_project, action){
  switch(action.type){
    case SETNAMEOFPROJECT: {
      return {...state, name_of_project: action.payload}
    }
    case SETPROJECT: {
      return {...state, list_of_projects: action.payload}
    }
    case SETPROJECTTIME:{
      return {...state, time_of_project: action.payload}
    }

    default: return state
  }
}

const init_task = {
  nameTask: '',
  timeTask: '',
  textTask: '',
  nameProject: '',
  allUsers: [],
  selectedProject: '',
  readedTask: [],
  selectedUser: '',
  taskfortracking: '',
  idforproj: '',
  
}
function setTask(state = init_task, action){
  switch(action.type){
    case SETNAMETASK:{
      return {...state, nameTask: action.payload}
    }
    case SETTIMETASK: {
      return {...state, timeTask: action.payload}
    }
    case SETTEXTTASK:{
      return {...state, textTask: action.payload}
    }
    case GETUSERS:{
      return{...state, allUsers: action.payload}
    }
    case SETPROJECTFORTASK:{
      return{...state, selectedProject: action.payload}
    }
    case READTASK:{
      return {...state, readedTask: action.payload}
    }
    case SETUSERTASK: {
      return {...state, selectedUser: action.payload}
    }
    case SETTASKFORTRACKING: {
      return {...state, taskfortracking: action.payload}
    }
    case SETIDPRO: {
      return {...state, idforproj: action.payload}
    }
    
    default: return state
  }
}


const initialState = {
  success: false,
  created: false,
  loading: false,
  error: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'start_req':
      return {
        success: false,
        loading: true,
      };
    case 'req_success':
      return {
        success: true,
      };
    case 'err_req':
      return {
        loading: false,
        error: true,
      };
      
    case 'success_create':
      return {
        created: true
      };
    case 'err_create':
      return {
        created: false
      };
        
    default:
      return state;
  }
};

  


export const rootReducer = combineReducers({
  enter: enterReducer,
  setAuth: Auth,
  setProject: setProject,
  reducer: reducer,
  setTask: setTask,
  
  
})