import axios from 'axios';
import { create_profile_error, create_profile_success } from '../actions/profile';

export const create_profile_dev = (obj, url) => async (dispatch) => {
  try {
    const {
      data_profile: data_profile
    } = await axios.post(`${process.env.REACT_APP_BACKEND_URL}${url}`, obj)
    dispatch(create_profile_success(data_profile))
  } catch (error) {
    console.log(error)
    dispatch(create_profile_error({messege: 'Oops some went wrong...'}))
  }
}











