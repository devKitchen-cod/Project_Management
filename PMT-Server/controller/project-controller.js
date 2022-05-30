const { create_project_req, update_project_req, delete_project_req, getIdProject, get_all_projects_req, get_one_project_req } = require('../DataBase/requests_on_db/project/projects-crud-req')

module.exports.createProject = async (req, res) => {
  let Project = {name_project: req.body.name_project, date_create: req.body.date_create, date_end: req.body.date_end, id_creator: req.body.id_creator}
  try {
    const result = await create_project_req(Project)    
    console.log('===========',result.dataValues)

    if(result.dataValues === null){
      res.status(503).jsone({messege:'error'})
    }else {
      res.status(200).json({messege: 'Created', result: result.dataValues}) 
    }
                                
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'ERROR'})
  }
}

module.exports.updateProject = async (req, res) => {
  let newData = {name_project: req.body.name_project, date_create: req.body.date_create, date_end: req.body.date_end, id_project: req.body.id_project}
  try {
    const result = await update_project_req(newData)
    if(result === null){
      res.status(503).jsone({messege: 'DB Error'})  
    }
    else{ 
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).jsone({messege: 'ERROR'})
  }
}

module.exports.deleteProject = async (req, res) => {
  let Project = { id_project: req.body.id_project}
  try {
    const result = await delete_project_req(Project)
    result ? res.status(200).jsone({messege: 'deleted'}) : res.status(503).jsone({messege: 'DB Error'})
  } catch (error) {
    console.log(error)
    res.status(503).jsone({messege: 'Error'})

  }  
}

module.exports.getAllProjects = async (req, res) => {
  let Creators_ID = req.body.id_creator
  try {
    let result = await get_all_projects_req(Creators_ID)
    if (result === null){
      res.status(503).jsone({messege: 'Error'})  
    }
    else {
      res.status(200).json({messege: 'Successfull', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).jsone({messege: 'Error'})
  }
}

module.exports.getOneProject = async (req, res) => {
  let Project_ID = req.body.id_project
  try {
    let result = await get_one_project_req(Project_ID)    
    if (result === null){
      res.status(503).jsone({messege: 'Error'})  
    }
    else {
      res.status(200).json({messege: 'Successfull', result: result})
    }    
  } catch (error) {
    console.log(error)
  }
}


