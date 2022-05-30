
const { adding_extra_data } = require("../DataBase/requests_on_db/auth/auth_req")
const { get_dev_directions, get_dev_levels } = require("../DataBase/requests_on_db/data_getters/spr_data_getter_req")
const { create_profile_dev_req, update_profile_dev_req, delete_profile_dev_req, get_all_data_dev_profile, get_directions_dev, get_levels_dev } = require("../DataBase/requests_on_db/profiles/create_profile_dev")
const { create_pm_profile, update_pm_profile, delete_pm_profile } = require("../DataBase/requests_on_db/profiles/create_profile_pm")
const { isVerification } = require("../DataBase/requests_on_db/verify/verification_req")

//Developer

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
    const result_adding = await adding_extra_data(DevProfile)
    if (verify === true) {
      if (result_adding === false) {
        res.status(503).json({messege: 'DB error'})
      } else {
        let result_creating = await create_pm_profile(CreatorProfile)
        if (result_creating === false) {
          res.status(503).json({messege: 'DB error'})
        } else {
          res.status(200).json({messege: 'successful', result: result_creating, result_adding})
        }
      }
    } else {
      res.status(503).json({messege: 'not verify'})
    }
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
    if (result === false) {
        res.status(503).json({messege: 'DB Error'})
    } else {
        res.status(200).json({messege: 'Success Updated', result: result})   
    }
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

module.exports.getDirectionsDev = async (req, res) => {
  try {
    let result = await get_directions_dev()
    if (result === flase) {
      res.status(503).json({messege: 'Error'})
    } else {
      res.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.getLevelsDev = async (req, res) => {
  try {
    let result = get_levels_dev()
    if (result === flase) {
      res.status(503).json({messege: 'Error'})
    } else {
      re.status(200).json({messege: 'Successful', result: result})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
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
    const verify = await isVerification(CreatorProfile.id_profile)
    const result_adding = await adding_extra_data(CreatorProfile)
    if (verify === true) {
      if (result_adding === false) {
        res.status(503).json({messege: 'DB error'})
      } else {
        let result_creating = await create_pm_profile(CreatorProfile)
        if (result_creating === false) {
          res.status(503).json({messege: 'DB error'})
        } else {
          res.status(200).json({messege: 'successful', result: result_creating, result_adding})
        }
      }
    } else {
      res.status(503).json({messege: 'not verify'})
    }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'ERROR'})
  }
}
module.exports.updatePMprofile = async function(req, res){
  let new_pm_profile = {id_profile: req.body.id_profile, new_work_exp: req.body.work_exp, new_description: req.body.description}
  try {
    let result = await update_pm_profile(new_pm_profile)
    if (result === false) {
      res.status(503).json({messege: 'DB Error'})
    } else {
        res.status(200).json({messege: 'Success Updated', result: result})   
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.deletePMprofile = async function(req, res){
  let deleted_pm_profile = {id_profile: req.body.id_profile}
  try {
    let result = await delete_pm_profile(deleted_pm_profile)
    result ? res.status(200).json({messege: 'Success Updated'}) : res.status(503).json({messege: 'DB Error'})
  } catch (error) {
    console.log(error)
  }
}

