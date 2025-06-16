import axios from 'axios';

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Register failed";
    dispatch({ type: 'REGISTER_FAIL', payload: errorMessage });
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', userData);
    localStorage.setItem('token', response.data.token);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (error) {
    const errorMessage = error.response?.data?.error || "Login failed";
    dispatch({ type: 'LOGIN_FAIL', payload: errorMessage });
    throw new Error(errorMessage); 
  }
};
