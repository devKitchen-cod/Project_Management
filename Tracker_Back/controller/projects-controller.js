const db = require('../DataBase/db')

module.exports.getProject = async function (req, res){
    let newProject =  req.body.email
    console.log("=====" + newProject)

    let list_projects = await db.query(`select "id", "name_project", "current_time" from "Projects_Table" where "owner_project"=$1`,[newProject])
    console.log('asdas',list_projects.rows)
    res.send(list_projects.rows)
}
module.exports.getUsers = async function (req, res){
    const role = 1
    let users = await db.query(`select "email_user", "name_user" from "Users_Table" ` )
    console.log('users===', users.rows)
    res.send(users.rows)
  }