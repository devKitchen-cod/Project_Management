import { EDIT_DATA_USER_ERROR, EDIT_DATA_USER_SUCCESS, GET_EDITED_DATA } from "../reduxConstans"


export const edit_success = () =>({
  type: EDIT_DATA_USER_SUCCESS
})

export const get_edited_data = (payload) =>({
  type: GET_EDITED_DATA,
  payload
})

export const edit_error = (payload) =>({
  type: EDIT_DATA_USER_ERROR,
  payload
})