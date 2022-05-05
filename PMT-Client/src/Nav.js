import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Auth from './Component/Main/Auth';
import Login from './Component/Main/Login';
// import Vue_Project from './Component/Main/vueProject/VueProject';
import GuardedRoute from './Utils/GuardPro';
import StartPage from './Component/Main/StartPage'
// import Tracker from './Component/Main/Tracker'
// import Project from './Component/Main/Project'
// import Create from './Component/Main/Create'
import NavBar from './Component/Header/NavBar';

// import { reqChekToken } from './Utils/redux/actions';
// import { Container } from 'react-bootstrap';
// import Footer from './Component/Footer/Footer';
import AboutUs from './Component/Main/AboutUs';

import CreatePMProfile from './Component/Main/Profiles/creating_profile/CreatePMProfile';
import CreateDevProfile from './Component/Main/Profiles/creating_profile/CreateDevProfile';
import CreateProfiles from './Component/Main/Profiles/creating_profile/CreateProfiles';



export default function Nav(){
  // const item = useSelector((state) => state.enter)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   const token = localStorage.getItem('token')  
  //     dispatch(reqChekToken(token))
  // }, [])
  return (
    
    <Router>    
      <NavBar/>
       <Switch>                                 
                
        {/* <GuardedRoute path = '/vue_project' component = {Vue_Project} auth = {item}/>          
        <GuardedRoute path = '/create'  component = {Create}   auth = {item}/>  
        <GuardedRoute path = '/project' component = {Project}  auth = {item}/>  
        <GuardedRoute path = '/tracker' component = {Tracker}  auth = {item}/>  */}
        {/* <Route path = '/about_us'><AboutUs/></Route> */}


        
        <Route path = '/create_pm_profile'><CreatePMProfile/></Route>        
        <Route path = '/create_dev_profile'><CreateDevProfile/></Route>
        <Route path = '/create_profiles_page'><CreateProfiles/></Route>
        <Route path = '/auth'><Auth/></Route>
        <Route path = '/login'><Login/></Route>        
        <Route path = "/"><StartPage/></Route>
        
      </Switch>
      {/* <Footer/> */}
    </Router>
   
  )
}