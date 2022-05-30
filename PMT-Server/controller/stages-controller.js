const { create_stage_req, update_stage_req, delete_stage_req, get_status_stage } = require("../DataBase/requests_on_db/stages/stages-crud-req")


module.exports.createStage = async (req, res) => {
  let Stage = {
    name_stage: req.body.name_stage, 
    date_start: req.body.date_start, 
    date_end: req.body.date_end, 
    id_type_stage: req.body.id_type_stage, 
    id_project: req.body.id_project
  }
  try {
    let result = await create_stage_req(Stage)
    if(result === null){
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

module.exports.updateStage = async (req, res) => {
  let newStage = {
    id_stage: req.body.id_stage,
    new_name_stage: req.body.new_name_stage,
    new_date_start: req.body.new_date_start,
    new_date_end: req.body.new_date_end,
    new_id_type_stage: req.body.new_id_type_stage    
  }
  try {
    let result = await update_stage_req(newStage)
    if(result === null){
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

module.exports.deleteStage = async (req, res) => {
  let deletedStage = req.body.id_stage
  try {
    let result = await delete_stage_req(deletedStage)
    result? res.status(200).json({messsege: 'Successful deleted', result: result}) : res.status(503).json({messege: 'error', result: result})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.getAllStages = async (req, res) => { //выборка всех этапов ОДНОГО проекта 
  let id_project = req.body.id_project
  try {    
    let result = await get_all_stages_req(id_project)
    if(result === null) {
      res.status(503).json({messege: 'Error'})
    }
    else{
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.getOneStage = async (req, res) => { //выборка конкретного этапа 
  let id_stage = req.body.id_stage
  try {
    let result = await get_one_stage_req(id_stage)
    if(result === null){
      res.status(503).json({messege: 'Error'})
    }
    else{
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.getSatusStage = async (req, res) => {
  try {
    let result = await get_status_stage()
    if (result === false) {
      res.status(503).json({messege: 'error'})
    } else {
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

//==========================================

module.exports.getAllTypeStage = async (req, res) => {

}

module.exports.getOneTypeStage = async (req, res) => {
  
}

module.exports.createTypeStage = async (req, res) => {

}

module.exports.updateTypeStage = async (req, res) => {
  
}

module.exports.deleteTypeStage = async (req, res) => {
  
}

//==========================================