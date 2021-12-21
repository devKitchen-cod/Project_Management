const db = require('../DataBase/db')

module.exports.createProject = async function(req, res){
  let newProject = {name: req.body.name, user:req.body.user}
  try{
    db.query(`INSERT INTO "Tracker_Projects" ("Name_of_Project", "user") values ($1, $2)`, [newProject.name, newProject.user])
    console.log(newProject.name)
    console.log(newProject.user)

  }catch (err) {
      console.log(err);
    }


}
module.exports.trackContrl = async function(req, res){
  let Tracking = {nameProject:req.body.name_project, startTime: req.body.start_time, workTime: req.body.work_time, stopTime: req.body.stop_time  }
  
  console.log("Start time of project " + Tracking.nameProject + '  ==  ' + Tracking.startTime)
  console.log("Work time of project " + Tracking.nameProject + '  ==  ' + Tracking.workTime)
  console.log("Stop time of project " + Tracking.nameProject + '  ==  ' + Tracking.stopTime)

  try{
    db.query(`UPDATE "Tracker_Projects" SET "qurent_time" =  $1, "start_time" = $3, "stop_time" = $4 WHERE "Name_of_Project"= $2 `, [Tracking.workTime, Tracking.nameProject, Tracking.startTime, Tracking.stopTime])
  
  }catch (err) {
    console.log(err);
  }


  
}