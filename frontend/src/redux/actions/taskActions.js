// frontend/src/redux/actions/taskActions.js
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks";

export const fetchTasks = () => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const response = await axios.get(API_URL, {
      headers: { "x-auth-token": token },
    });
    dispatch({ type: "FETCH_TASKS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_TASKS_FAIL", payload: error.response.data.error });
  }
};

export const createTask = (taskData) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const response = await axios.post(API_URL, taskData, {
      headers: { "x-auth-token": token },
    });
    dispatch({ type: "CREATE_TASK_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "CREATE_TASK_FAIL", payload: error.response.data.error });
  }
};

export const updateTask = (id, taskData) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    const response = await axios.put(`${API_URL}/${id}`, taskData, {
      headers: { "x-auth-token": token },
    });
    dispatch({ type: "UPDATE_TASK_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "UPDATE_TASK_FAIL", payload: error.response.data.error });
  }
};

export const deleteTask = (id) => async (dispatch, getState) => {
  try {
    const token = getState().auth.token;
    await axios.delete(`${API_URL}/${id}`, {
      headers: { "x-auth-token": token },
    });
    dispatch({ type: "DELETE_TASK_SUCCESS", payload: id });
  } catch (error) {
    dispatch({ type: "DELETE_TASK_FAIL", payload: error.response.data.error });
  }
};
