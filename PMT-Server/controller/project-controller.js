const db = require('../DataBase/db')
const { create_project_req, update_project_req } = require('../DataBase/requests_on_db/project/projects-req')

module.exports.createProject = async (req, res) => {
  let Project = {name_project: req.body.name_project, date_start: req.body.date_start, date_end: req.body.date_end, id_creator: req.body.id_creator}
  try {
    const result = await create_project_req(Project)
    result? res.status(200).jsone({messege: 'Created'}) : res.status(500).jsone({messege:'error'})
  } catch (error) {
    console.log(error)
    res.status(500).jsone({messege: 'ERROR'})
  }
}

module.exports.updateProject = async (req, res) => {
  let newData = {name_project: req.body.name_project, date_start: req.body.date_start, date_end: req.body.date_end}
  try {
    const result = await update_project_req(newData)
    result? res.status(200).jsone({messege: 'Successfull Updated', updating: true}) : res.status(500).jsone({messege: 'DB Error', updating: false})
  } catch (error) {
    console.log(error)
    res.status(500).jsone({messege: 'ERROR'})
  }
}

module.exports.deleteProject = async (req, res) => {
  let Project = { id_project: req.body.id_project}
  
}

module.exports.createProject1 = async function(req, res){
  let newProject = {name: req.body.name, user:req.body.user, description: req.body.description}
    try{
    db.query(`INSERT INTO "Projects_Table" ("name_project", "owner_project", "description_project") values ($1, $2, $3)`, [newProject.name, newProject.user, newProject.description])
  

  }catch (err) {
      console.log(err);
    }
}

module.exports.deleteProject1 = async function(req,res){
  // DELETE PROJECT AND ALL TASKS OF PROJECT
   let deletedProject = {name: req.body.name, user: req.body.user}
   console.log('------'+ deletedProject.name, deletedProject.user )
   try {
     db.query(`delete from "Projects_Table" where "name_project" = $1 and "owner_project" = $2 `, [deletedProject.name, deletedProject.user])
     db.query(`delete from "Tasks_Table" where "project_task"= $1`, [deletedProject.name])
   } catch (err) {
     console.log(err)
   }
}



module.exports.trackContrl = async function(req, res){
  let Tracking = {nameProject:req.body.nameProject, workTime: req.body.workTime}
    
  console.log("Work time of project " + Tracking.nameProject + '  ==  ' + Tracking.workTime)

  try{
    db.query(`UPDATE "Projects_Table" SET "current_time" =  $1 WHERE "name_project"= $2 `, [Tracking.workTime, Tracking.nameProject])
  
  }catch (err) {
    console.log(err);
  }  
}

module.exports.getDescriptionProject = async function(req, res){
  let name = {nameproject: req.body.name, owner: req.body.owner}
  try {
    db.query(`select "description_project" from "Projects_Table" where "name_project" = $1 and "owner_project" = $2`, [name.nameproject, name.owner])
  } catch (error) {
    console.log(error)
  }
}