import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Nav from './Nav'
import "../src/Styles/index.css"


ReactDOM.render(

 <Provider store = {store}>
  <Nav/>
  </Provider>
 
  
   , document.getElementById("root"));