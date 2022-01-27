import React from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Auth from './Component/Main/Auth';
import Login from './Component/Main/Login';

import Vue_Project from './Component/Main/vueProject/VueProject';
import CreateTask from './Component/Main/vueProject/CreateTask';
import EditTask from './Component/Main//vueProject/EditTask';

import GuardedRoute from './Utils/GuardPro';

import StartPage from './Pages/StartPage'
import Tracker from './Component/Main/Tracker'
import Project from './Component/Main/Project'
import Create from './Component/Main/Create'
import Story from './Component/Main/Story'
import NavBar from './Component/Header/NavBar';


export default function Nav(){
  const item = useSelector((state) => state.enter)

  return (

    <Router>
      <NavBar/> 
      
      <Switch>           
        <GuardedRoute path = '/editTask'   component = {EditTask} auth = {item}/>   
        <GuardedRoute path = '/createTask' component = {CreateTask} auth = {item}/>   
        <GuardedRoute path = '/vue_project' component = {Vue_Project} auth = {item}/>  
        <GuardedRoute path = '/story'   component = {Story}   auth = {item}/>  
        <GuardedRoute path = '/create'  component = {Create}   auth = {item}/>  
        <GuardedRoute path = '/project' component = {Project}  auth = {item}/>  
        <GuardedRoute path = '/tracker' component = {Tracker}  auth = {item}/> 

        <Route path = '/auth'><Auth/></Route>
        <Route path = '/login'><Login/></Route>
        <Route path = "/"><StartPage/></Route>
      </Switch>
    </Router>
  )
}