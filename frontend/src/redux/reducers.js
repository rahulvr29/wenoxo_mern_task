import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import taskReducer from './reducers/taskReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tasks: taskReducer,
});

export default rootReducer;
