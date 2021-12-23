const db = require('../DataBase/db')

module.exports.createTask = async function(req, res){
  let newTask = {
    name_of_task: req.body.name_of_task,
    time_for_task: req.body.time_for_task,
    descripton_of_task: req.body.descripton_of_task
    // task_of_project: req.body.project, 
    // user_of_task: req.body.user_of_task, 
    
  }
  console.log('Task CREATING')

  try {
    db.query(`INSERT INTO "Tasks_Table" ("name_task", "time_task", "description_task") values ($1, $2, $3)`,
     [newTask.name_of_task, newTask.time_for_task, newTask.descripton_of_task]) 
  } catch (error) {
    console.log(error)
  }
}

module.exports.readTask = async function(req, res){
  
  let result_of_request = await db.query(`SELECT "name_task", "description_task", "time_task" FROM "Tasks_Table"`)

  console.log(result_of_request.rows)
  res.send(result_of_request.rows)
}

