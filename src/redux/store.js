import { combineReducers, createStore } from 'redux';
import tasks from './reducers/tasks';
import tasksFilter from './reducers/tasksFilter';

let rootReducer = combineReducers({ tasks, tasksFilter });
let store = createStore(rootReducer);

export default store;