import { GET_PROFILE_AUTH_ERROR, GET_PROFILE_AUTH_SUCCESS } from "../reduxConstans"


const init_create_dev_profile = {
  created: false,
  error: false,  
  data_profile: []
}

const Create_Profile = (state = init_create_dev_profile, action) => {
  switch (action.type) {
    
    case GET_PROFILE_AUTH_SUCCESS:{return{...state, created: true, data_profile: action.payload}}
    case GET_PROFILE_AUTH_ERROR:{return{...state, created: false, error: action.payload}}
             
    default: return state
      
  }
}

export default Create_Profile

