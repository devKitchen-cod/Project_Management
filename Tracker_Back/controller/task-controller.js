const db = require('../DataBase/db')

module.exports.createTask = async function(req, res){
  let newTask = {
    name_of_task: req.body.name_of_task,
    time_for_task: req.body.time_for_task,
    descripton_of_task: req.body.descripton_of_task,
    project_task: req.body.project_task, 
     user_task: req.body.user_task, 
     status_task: req.body.status_task
  }
  console.log('Task CREATING')
  try {
    db.query(`INSERT INTO "Tasks_Table" ("name_task", "planned_time_task", "description_task", "project_task", "user_task", "status") values ($1, $2, $3, $4, $5, $6)`,
     [newTask.name_of_task, newTask.time_for_task, newTask.descripton_of_task, newTask.project_task, newTask.user_task, newTask.status_task]) 
  } catch (error) {
    console.log(error)
  }
}

module.exports.readTask = async function(req, res){
  
   let newdata = {tasks: req.body.tasks}
   console.log(" request data id === ", newdata.tasks)
   let result_of_request = ''
  try{
    result_of_request = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1`, [newdata.tasks])
  }catch(error){console.error();}
  // console.log("result == ",result_of_request.rows)
  res.send(result_of_request.rows)
}

module.exports.readTaskPlanned = async function(req, res){  //planned
  let newdata = {tasks: req.body.tasks}
  console.log(" request data id === ", newdata.tasks)
  let result_of_request = ''
 try{
  //  result_of_request = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1`, [newdata.tasks]) двойное условие по полям :"project_task" и "status"
 }catch(error){console.error();}
 // console.log("result == ",result_of_request.rows)
 res.send(result_of_request.rows)
}

module.exports.readTaskInProgress = async function(req, res){  //inprogress
  let newdata = {tasks: req.body.tasks}
  console.log(" request data id === ", newdata.tasks)
  let result_of_request = ''
 try{
  //  result_of_request = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1`, [newdata.tasks]) двойное условие по полям :"project_task" и "status"
 }catch(error){console.error();}
 // console.log("result == ",result_of_request.rows)
 res.send(result_of_request.rows)
}

module.exports.readTaskInDone = async function(req, res){  //Done
  let newdata = {tasks: req.body.tasks}
  console.log(" request data id === ", newdata.tasks)
  let result_of_request = ''
 try{
  //  result_of_request = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1`, [newdata.tasks]) двойное условие по полям :"project_task" и "status"
 }catch(error){console.error();}
 // console.log("result == ",result_of_request.rows)
 res.send(result_of_request.rows)
}