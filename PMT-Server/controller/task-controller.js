const { create_task_req, update_task_req, get_all_task, get_status_task } = require("../DataBase/requests_on_db/tasks/task_req")


module.exports.createTask = async (req, res) => {
  let Task = {
    name_task: req.body.name_task,
    date_start: req.body.date_start,
    date_end: req.body.date_end,
    status_task: req.body.status_task,
    id_stage: req.body.id_stage
  }
  try {
    let result = await create_task_req(Task)
    if(result === false){ 
      res.status(503).json({messege: 'Error'})
    }
    else{
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.updateTask = async (req, res) => {
  newTask = {
    new_name_task: req.body.name_task,
    new_date_start: req.body.date_start,
    new_date_end: req.body.date_end,
    new_status_task: req.body.status_task,
    new_id_stage: req.body.id_stage
  }
  try {
    let result = await update_task_req(newTask)
    if(result === false){
      res.status(503).json({messege: 'Error'})
    }else{
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.deleteTask = async (req, res) => {
  id_task = req.body.id_task
  try {
    let result = await deleted_task_req()
    result? res.status(200).json({messege: 'Successful', result: result}) : res.status(503).json({messege: 'Error', result: result})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.getAllTask = async (req, res) => {
  id_stage = req.body.id_stage
  try {
    let result = await get_all_task(id_stage)
    if(result === false){
      res.status(503).json({messege: 'Error'})
    }else{ 
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.getOneTask = async (req, res) => {
  id_task = req.body.id_task
  try {
    let result = await get_all_task(id_task)
    if(result === false){
      res.status(503).json({messege: 'Error'})
    }else{
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.getStatusTask = async (req, res) => {
  try {
    let result = await get_status_task()
    if (reuslt === false) {
      res.status(503).json({messege: 'Error'})
    } else {
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})

  }
}

















// const db = require('../DataBase/db')

// module.exports.createTask = async function(req, res){
//   let newTask = {
//     name_of_task: req.body.name_of_task,
//     time_for_task: req.body.time_for_task,
//     descripton_of_task: req.body.descripton_of_task,
//     project_task: req.body.project_task, 
//      user_task: req.body.user_task, 
//      status_task: req.body.status_task
//   }
//   console.log('Task CREATING')
//   try {
//     // db.query(`INSERT INTO "Tasks_Table" ("name_task", "planned_time_task", "description_task", "project_task", "user_task", "status") values ($1, $2, $3, $4, $5, $6)`,
//     //  [newTask.name_of_task, newTask.time_for_task, newTask.descripton_of_task, newTask.project_task, newTask.user_task, newTask.status_task]) 

//   } catch (error) {
//     console.log(error)
//   }
// }
// //--reading tasks---------------
// module.exports.readTask = async function(req, res){
//    let newdata = {tasks: req.body.tasks}
//    let result_of_request = ''
//   try{
//     result_of_request = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1`, [newdata.tasks])
//   }catch(error){console.error();}
//   res.send(result_of_request.rows)
// }
// module.exports.readTaskPlanned = async function(req, res){  //planned
//   let newdata = {status: req.body.status, name: req.body.name}
//   let result_of_request_plan = ''
//  try{
//   result_of_request_plan = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1 AND "status" = $2`, [newdata.name, newdata.status]) 
//  }catch(error){console.error();}
//  res.send(result_of_request_plan.rows)
// }
// module.exports.readTaskInProgress = async function(req, res){  //inprogress
//   let newdata = {status: req.body.status, name: req.body.name}
//   let result_of_request_inprogress = ''
//  try{
//   result_of_request_inprogress = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1 AND "status" = $2`, [newdata.name, newdata.status]) 
//  }catch(error){console.error();}
//  res.send(result_of_request_inprogress.rows)
// }
// module.exports.readTaskInDone = async function(req, res){  //Done
//   let newdata = {status: req.body.status, name: req.body.name}
//   let result_of_request_done = ''
//  try{
//   result_of_request_done = await db.query(`SELECT "id", "name_task", "description_task", "planned_time_task", "project_task", "user_task" FROM "Tasks_Table" WHERE "project_task" = $1 AND "status" = $2`, [newdata.name, newdata.status]) 
//  }catch(error){console.error();}
//  res.send(result_of_request_done.rows)
// }
// //--reading tasks---------------



// //--change status tasks---------------

// module.exports.changeStatusTask = async function(req, res){
//   let newdata = {status: req.body.status, id: req.body.id}
//   console.log(newdata.status, newdata.id)
//   let result_of_request_change = ''
//   try {
//      await db.query(`UPDATE "Tasks_Table" SET "status" =  $1 WHERE "id"= $2`, [newdata.status, newdata.id])
//   } catch (error) {
//     console.log(error)
//   }

// }

// //--change status tasks---------------





// //--delete tasks---------------

// module.exports.deleteTasks = async function(req, res){
//   let newData = {id: req.body.id}
//   console.log(newData.id)
//   try {
//     await db.query(`delete from "Tasks_Table" where "id"= $1`, [newData.id])
//   } catch (error) {
//     console.log(error)
//   }
// }

// //--delete tasks---------------
