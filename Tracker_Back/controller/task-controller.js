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
    db.query(`INSERT INTO "Task_table" ("name_of_task", "time_for_task", "description_of_task") values ($1, $2, $3)`,
     [newTask.name_of_task, newTask.time_for_task, newTask.descripton_of_task]) 
  } catch (error) {
    console.log(error)
  }
}

module.exports.readTask = async function(req, res){
  
  let result_of_request = await db.query(`SELECT "name_of_task", "user", "time_for_task" FROM "Task_table"`)

  console.log(result_of_request.rows)
  res.send(result_of_request.rows)
}

