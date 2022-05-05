import { GET_PROFILE_AUTH_ERROR, GET_PROFILE_AUTH_SUCCESS } from "../reduxConstans"


export const create_profile_success = (payload) =>({
  type: GET_PROFILE_AUTH_SUCCESS,
  payload
})

export const create_profile_error = (payload) =>({
  type: GET_PROFILE_AUTH_ERROR,
  payload
})
