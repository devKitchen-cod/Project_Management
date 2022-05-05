import { EDIT_DATA_USER_ERROR, EDIT_DATA_USER_SUCCESS, GET_EDITED_DATA } from "../reduxConstans"


const init_edit_user = {
  edited: false,
  error: '',
  edited_data: [],

}

const Edit = (state = init_edit_user, action) => {
  switch (action.type) {

    case EDIT_DATA_USER_SUCCESS:{
      return {...state, edited: true}
    }

    case GET_EDITED_DATA: {
      return {...state, edited: false, edited_data: action.payload}
    }
    
    case EDIT_DATA_USER_ERROR: {
      return {...state, error: action.payload}
    }

  
    default: return state
      
  }
}

export default Edit;