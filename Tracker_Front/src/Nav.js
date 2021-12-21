import React from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Vue_Project from './Component/logic_component/VueProject';
import CreateTask from './Component/vueProject/CreateTask';
import EditTask from './Component/vueProject/EditTask';
import Auth from './Pages/Auth';
import Create from './Pages/CreateProject';
import HomePage from './Pages/Home'
import Login from './Pages/Login';
import Project from './Pages/Project';
import StartPage from './Pages/StartPage'
import StartPageF from './Pages/StartPageforauth';
import Story from './Pages/Story';
import Tracker from './Pages/Tracker';
import GuardedRoute from './Utils/GuardPro';





export default function Nav(){
  const item = useSelector((state) => state.enter)
  return (
    <Router>
      <Switch>   
        {/* <GuardedRoute path = '/' component = {} auth = {item}/>    */}
        <GuardedRoute path = '/editTask'   component = {EditTask} auth = {item}/>   
        <GuardedRoute path = '/createTask' component = {CreateTask} auth = {item}/>   
{console.log("hello")}
        <GuardedRoute path = '/vue_project' component = {Vue_Project} auth = {item}/>  
        <GuardedRoute path = '/story'   component = {Story}   auth = {item}/>  
        <GuardedRoute path = '/create'  component = {Create}   auth = {item}/>  
        <GuardedRoute path = '/project' component = {Project}  auth = {item}/>  
        <GuardedRoute path = '/tracker' component = {Tracker}  auth = {item}/> 
        <GuardedRoute path = '/startp'  component = {StartPageF}  auth = {item}/>  
    
        <Route path = '/auth'><Auth/></Route>
        <Route path = '/login'><Login/></Route>
        <Route path = '/home'><HomePage/></Route>
        <Route path = "/"><StartPage/></Route>
      </Switch>
    </Router>
  )
}