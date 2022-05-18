
const { adding_extra_data } = require("../DataBase/requests_on_db/auth/auth_req")
const { get_dev_directions, get_dev_levels } = require("../DataBase/requests_on_db/data_getters/spr_data_getter_req")
const { create_profile_dev_req, update_profile_dev_req, delete_profile_dev_req, get_all_data_dev_profile } = require("../DataBase/requests_on_db/profiles/create_profile_dev")
const { create_pm_profile, update_pm_profile, delete_pm_profile } = require("../DataBase/requests_on_db/profiles/create_profile_pm")
const { isVerification } = require("../DataBase/requests_on_db/verify/verification_req")

//Developer
module.exports.get_sub_info_dev = async (data) => {
  try {
    let result_directions = await get_dev_directions()
    let result_levels = await get_dev_levels()
    if (result_directions, result_levels === false){
      res.status(503).jsone({messege: 'Error'})
    }
    if(result_directions.length == 0){ 
      res.status(200).json({messege: 'Directions are empty'})
    }else{
      res.status(200).json({
        data: result_directions, result_levels
      })
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.getDevData = async (req, res) => {
  let data = {id_profile: req.body.id_profile}
  
  try {
    let result = await get_all_data_dev_profile(data)
    res.status(200).json({
      messege: 'successfull',
      data: result
    })
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'DB error'})
  } 
}

module.exports.createDevProfile = async function(req, res) {
  let DevProfile = {
    id: req.body.id,
    fname: req.body.fname, 
    lname: req.body.lname,
    date_of_birth: req.body.date_birth, 
    country: req.body.country,

    workexp: req.body.workexp,     
    description: req.body.description,
    techs: req.body.techs,
    direction: req.body.direction, 
    level: req.body.level
  }
  try {
    const verify = await isVerification(DevProfile.id)
    const result = await adding_extra_data(DevProfile)
    //???
    verify ? 

      result ?  await create_profile_dev_req(DevProfile) : res.status(503).json({messege: 'DB error'})
      :
      // res.status(503) 
      console.log('Check your verify first')
      
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'ERROR'})
  }
}
module.exports.updateDevProfile = async function(req, res) {
  let newData = {
    id_profile: req.body.id_profile,

    new_workexp: req.body.workexp,     
    new_description: req.body.description,
    new_techs: req.body.techs,
    new_direction: req.body.direction, 
    new_level: req.body.level
  }
  try {
    let result = await update_profile_dev_req(newData)
    result ? 
      res.status(200).json({messege: 'Success Updated'}) 
        :
      res.status(503).json({messege: 'DB Error'})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'ERROR'})
  }
}
module.exports.deleteDevProfile = async function(req, res) {
  
  let deletedDevProfile = {
    id_profile: req.body.id_profile
  }
  try { 
    let result = await delete_profile_dev_req(deletedDevProfile)
    result? 
      res.status(200).json({messege: 'Deleted successful'})
      :
      res.status(503).json({messege: 'DB Error'})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'ERROR'})
  }
}


//Project manager
module.exports.createPMprofile = async function(req, res){
  let CreatorProfile = {
    id_profile: req.body.id,
    creator_work_exp: req.body.work_exp,
    description: req.body.description,

    fname: req.body.fname, 
    lname: req.body.lname,
    date_of_birth: req.body.date_birth, 
    country: req.body.country,
  }
  try {
    const verify = await isVerification(DevProfile.id)
    const result = await adding_extra_data(CreatorProfile)
    //???
    verify ? 

      result ?  await create_pm_profile(CreatorProfile) : res.status(503).json({messege: 'DB error'})
      :
      // res.status(503) 
      console.log('Check your verify first')
      
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'ERROR'})
  }
}
module.exports.updatePMprofile = async function(req, res){
  let new_pm_profile = {id_profile: req.body.id_profile, new_work_exp: req.body.work_exp, new_description: req.body.description}
  let result = await update_pm_profile(new_pm_profile)
  result ? 
  res.status(200).json({messege: 'Success Updated'}) 
    :
  res.status(503).json({messege: 'DB Error'})
}
module.exports.deletePMprofile = async function(req, res){
  let deleted_pm_profile = {id_profile: req.body.id_profile}
  let result = await delete_pm_profile(deleted_pm_profile)
  result ? 
  res.status(200).json({messege: 'Success Updated'}) 
    :
  res.status(503).json({messege: 'DB Error'})
}

