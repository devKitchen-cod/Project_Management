import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import Form from 'react-bootstrap/Form'
import DisplayComponent from '../../Utils/DisplayComponent';
import BtnComponent from '../../Utils/BtnComponent';
import { SETNAMEOFPROJECT, SETTASKFORTRACKING } from '../../Utils/redux/redux-types';
import { reqreadtask, reqsetproject, reqsettimeproject } from '../../Utils/redux/actions';



export default function Tracker(){
  const dispatch = useDispatch();

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [data_of_start, setDatastart] = useState(new Date());

  const list_of_tasks = useSelector((state) => state.setTask.readedTask)
  console.log(list_of_tasks)

  const list_of_projects = useSelector((state) => state.setProject.list_of_projects)
  const name = useSelector((state) => state.setProject.name_of_project)
  const email = useSelector((state) => state.setAuth.email)

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;
  const obj = {email: email}

  useEffect(() => {
    dispatch(reqreadtask())
  }, []) 


  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
    const start_time = new Date()
    setDatastart(start_time) 
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

    const stop_time = new Date()
    const work = stop_time - data_of_start
    const work1 = work / 1000
    const obj = {nameProject: name, workTime: work1}
    dispatch(reqsettimeproject(obj))
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
          <Form.Select defaultValue = 'Choose project' onChange = {e => dispatch({type: SETNAMEOFPROJECT, payload: e.target.value})}>
            <option disabled>Choose project</option>
            {list_of_projects.map((item) =>(<option value = {item.name_project}>{item.name_project}</option>))}                        
          </Form.Select> 

          <Form.Select defaultValue = 'Choose task' onChange = {e => dispatch({type: SETTASKFORTRACKING, payload: e.target.value})}>
            <option disabled>Choose Task</option>
            {list_of_projects.map((item) =>(<option value = {item.name_task}>{item.name_task}</option>))}                        
          </Form.Select> 
        </div>        
      </div>
    </div>
  )
}