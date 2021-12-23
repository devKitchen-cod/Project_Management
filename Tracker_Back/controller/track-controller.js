const db = require('../DataBase/db')

module.exports.createProject = async function(req, res){
  let newProject = {name: req.body.name, user:req.body.user}
  try{
    db.query(`INSERT INTO "Projects_Table" ("name_project", "owner_project") values ($1, $2)`, [newProject.name, newProject.user])
    console.log(newProject.name)
    console.log(newProject.user)

  }catch (err) {
      console.log(err);
    }


}
module.exports.trackContrl = async function(req, res){
  let Tracking = {nameProject:req.body.name_project, workTime: req.body.work_time  }
  
  
  console.log("Work time of project " + Tracking.nameProject + '  ==  ' + Tracking.workTime)


  try{
    db.query(`UPDATE "Projects_Table" SET "current_time" =  $1 WHERE "Projects_Table"= $2 `, [Tracking.workTime, Tracking.nameProject])
  
  }catch (err) {
    console.log(err);
  }


  
}