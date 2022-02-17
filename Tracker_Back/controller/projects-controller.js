const db = require('../DataBase/db')

module.exports.getProject = async function (req, res){
    let newProject =  req.body.email
    console.log("=====" + newProject)

    let list_projects = await db.query(`select "id", "name_project", "current_time", "description_project" from "Projects_Table" where "owner_project"=$1`,[newProject])
    console.log('Sending list of projects === ',list_projects.rows)
    res.send(list_projects.rows)
}

module.exports.getUsers = async function (req, res){
    const role = 1
    let users = await db.query(`select "email_user", "name_user", "current_project", "proffetion", "developers_stack", "sallary" from "Users_Table" ` )
    console.log('users===', users.rows)
    res.send(users.rows)
  }

module.exports.getAllCEO = async function(req,res){
    let data = {ceo: req.body.ceo}
    console.log('============='+data)
    let usersCeo = await db.query(`select * from "Users_Table" where "proffetion" = $1`,[data.ceo]) 
    res.send(usersCeo.rows)
}

module.exports.getALLDevOps = async function(req,res){
    let data = {devops: req.body.devops}
    let usersDevops = await db.query(`select * from "Users_Table" where "proffetion" = $1`,[data.devops]) 
    res.send(usersDevops.rows)
}

module.exports.getALLDevelopers = async function(req,res){
    let data = {developer:req.body.developer}
    
    let usersDev = await db.query(`select * from "Users_Table" where "proffetion" = $1`,[data.developer]) 
    res.send(usersDev.rows)
}