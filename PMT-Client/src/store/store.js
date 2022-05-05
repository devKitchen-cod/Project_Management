import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import Project from "../Component/Main/Project"
import Tasks from "../Component/Main/vueProject/Tasks"
import Auth from './reducers/auth';


const rootReducer = combineReducers({
   Auth,
  // enter: Login,
  
  // setProject: Project,
  // setTask: Tasks,
  // reducer: Flags,
})


 const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store 