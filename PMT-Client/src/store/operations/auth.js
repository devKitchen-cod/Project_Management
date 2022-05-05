import axios from 'axios';
import React from 'react';
import { user_error_auth, user_error_login, user_request_auth, user_success_auth, user_success_login } from '../actions/auth';


export const auth = (obj, url) => async (dispatch) => {  
  try {
    const {
      data: token,
      data_user: data_user
    } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}${url}`, obj);

    dispatch(user_success_auth(token, data_user))
  } catch (error) {
    if (error.response?.status === 500) {
      return dispatch(user_error_auth({ message: 'Oops some went wrong...' }));
    }
  }
}


export const login = (obj, url) => async(dispatch) => {
  try {
    const {
      data: token,
      data_user: data_user
    } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}${url}`, obj);
    localStorage.setItem('token', token)
    dispatch(user_success_login(token, data_user))
  } catch (error) {
    if(error.response?.status === 500){
      return dispatch(user_error_login({message: 'Oops some went wrong...' }))
    }
  }
} 




