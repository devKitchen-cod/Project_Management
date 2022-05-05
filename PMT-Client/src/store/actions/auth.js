import { USER_AUTH_ERROR, USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "../reduxConstans";

export const user_request_auth = () =>({
  type: USER_AUTH_REQUEST
})

export const user_success_auth = (payload) => ({
  type: USER_AUTH_SUCCESS,
  payload
})

export const user_error_auth = (payload) => ({
  type: USER_AUTH_ERROR,
  payload
})

export const user_request_login = () => ({
  type: USER_LOGIN_REQUEST
})

export const user_success_login = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload
})

export const user_error_login = (payload) => ({
  type: USER_LOGIN_ERROR,
  payload
})

export const user_logout = () => ({
  type: USER_LOGOUT
})
