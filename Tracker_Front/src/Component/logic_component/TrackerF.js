import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import DisplayComponent from '../../Utils/DisplayComponent';
import BtnComponent from '../../Utils/BtnComponent';
import { SETNAMEOFPROJECT } from '../../Utils/redux/redux-types';
import { reqsetproject } from '../../Utils/redux/actions';


export default function TrackerF(){
  const dispatch = useDispatch();

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [data_of_start, setDatastart] = useState(0)
  const [data_of_stop, setDatastop] = useState()


  const list_of_projects = useSelector((state) => state.setProject.list_of_projects)
  const name = useSelector((state) => state.setProject.name_of_project)
  const email = useSelector((state) => state.setAuth.email)

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const obj = {email: email}
  

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    const start_time = new Date().toLocaleTimeString()
    setDatastart(start_time)
    console.log(data_of_start)
    
  };
  
  const run = () => {
    if(updatedM === 60){
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH});
  };
  const stop = () => {
   
    clearInterval(interv);
    setStatus(2);
    const stop_time = new Date().toLocaleTimeString()
    setDatastop(stop_time)
    console.log(data_of_stop)
    axios({
      method: "POST",
      url: "http://localhost:8080/api/tracker ",
      data: {
        name_project:name,
        start_time: data_of_start,
        work_time:time.s,
        stop_time: data_of_stop

        
      }
    })
  };
  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0})
  };  
  const resume = () => start()
  
  useEffect(() => {dispatch(reqsetproject(obj))}, [])

  return (
    <div>
      <div className="main-section">
        <div className="clock-holder">
          <div className="stopwatch">
            <DisplayComponent time={time}/>
            <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>        
          </div>
          <Form.Select onChange = {e => dispatch({type: SETNAMEOFPROJECT, payload: e.target.value})}>
            {list_of_projects.map((item) =>(
            <option value = {item.Name_of_Project}>{item.Name_of_Project}</option>
            ))}                        
          </Form.Select> 
        </div>        
      </div>
    </div>
  )
}