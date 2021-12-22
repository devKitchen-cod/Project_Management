const db = require('../DataBase/db')

module.exports.getProject = async function (req, res){
    let newProject =  req.body.email
    console.log("=====" + newProject)

    let res1 = await db.query(`select "id", "name_project", "current_time" from "Projects_Table" where "owner_project"=$1`,[newProject])
    console.log('asdas',res1.rows)
    res.send(res1.rows)
}
module.exports.getUsers = async function (req, res){
    const role = 1
    let users = await db.query(`select "user_email", "name" from "users" ` )
    console.log('users===', users.rows)
    res.send(users.rows)
  }