import axios from 'axios';

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REGISTER_FAIL', payload: error.response.data.error });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAIL', payload: error.response.data.error });
  }
};
