import { USER_AUTH_ERROR, USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../reduxConstans"

const init_auth = {
  
  token: '',
  error: '',
  data_user: [], 

  start_req_auth: false,
  success_req_auth: false,
  error_req_auth:false,
  authenticate: false
}
 const Auth = (state = init_auth, action) =>{
  switch(action.type){
    
    case USER_AUTH_SUCCESS:{
      return{...state, authenticate: true, token: action.payload.token, data_user: action.payload.data_user}
    }  
    case USER_AUTH_ERROR:{
      return{
        ...state, error_req_auth:true, error: action.payload
      }
    } 
  
    case USER_LOGIN_SUCCESS:{ 
      return{...state, authenticate: true, token: action.payload.token, data_user: action.payload.data_user}
    }     
    case USER_LOGIN_ERROR:{
      return{...state, error: action.payload}
    }

    case USER_LOGOUT:{
      
      return init_auth
    }   

    case USER_AUTH_REQUEST:{
      // return{...state, start_req_auth:true}
    }  
    case USER_LOGIN_REQUEST:{

    }  
   
    default: return state 
 
  }
}

export default Auth;

