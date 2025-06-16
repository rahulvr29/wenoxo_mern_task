// frontend/src/redux/reducers/taskReducer.js
const initialState = {
  tasks: [],
  loading: true,
  error: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'FETCH_TASKS_SUCCESS':
      return { ...state, tasks: payload, loading: false, error: null };
    case 'CREATE_TASK_SUCCESS':
      return { ...state, tasks: [...state.tasks, payload], loading: false, error: null };
    case 'UPDATE_TASK_SUCCESS':
      return {
        ...state,
        tasks: state.tasks.map(task => task._id === payload._id ? payload : task),
        loading: false,
        error: null
      };
    case 'DELETE_TASK_SUCCESS':
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== payload),
        loading: false,
        error: null
      };
    case 'FETCH_TASKS_FAIL':
    case 'CREATE_TASK_FAIL':
    case 'UPDATE_TASK_FAIL':
    case 'DELETE_TASK_FAIL':
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
}
