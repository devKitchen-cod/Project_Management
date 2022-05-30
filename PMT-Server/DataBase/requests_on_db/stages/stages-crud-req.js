
const { Spr_Status_Stages } = require("../../connecting_db")
const { Spr_Stages } = require("../connecting_db")


module.exports.create_stage_req = async (data) => {
  try {
    let result = await Spr_Stages.create({
      Name_Stage: data.name_stage,
      Date_Start: data.date_start,
      Date_End: data.date_end,
      TypeStageIDTypeStage: data.id_type_stage,
      SprProjectIDProject: data.id_project
    })
    return result
  } catch (error) { 
    console.log(error)
    return result
  }
}

module.exports.update_stage_req = async (data) => {
  try {
    let result = await Spr_Stages.update({
      Name_Stage: data.new_name_stage,
      Date_Start: data.new_date_start,
      Date_End: data.new_date_end,
      TypeStageIDTypeStage: data.new_id_type_stage
    }, {
      where: {
        ID_Stage: data.body.id_stage
      }
    })
    return result
  } catch (error) {
    console.log(error)
    return result
  }
}

module.exports.delete_stage_req = async (data) => {
   try {     
     await Spr_Stages.destroy({
      where: {
        ID_Stage: data
      }
     })
    return true
   } catch (error) {
     console.log(error)
     return false
   }
}

module.exports.get_status_stage = async (data) => {
  try {
    let result = await Spr_Status_Stages.findAll()
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

//==========================================

module.exports.create_type_stage_req = async (data) => {

}

module.exports.update_type_stage_req = async (data) => {

}

module.exports.delete_type_stage_req = async (data) => {

}

//==========================================

module.exports.get_all_stages_req = async (data) => {
  try {
    let result = await Spr_Stages.findAll({
      where: {
        SprProjectIDProject: data
      }
    })
    return result
  } catch (error) {
    console.log(error)
    return result
  }
}

module.exports.get_one_stage_req = async (data) => {
  try {
    let result = await Spr_Stages.findAll({
      where: {
        ID_Stage: data
      }
    })
    return result
  } catch (error) {
    console.log()
    return result
  }
}

//==========================================

module.exports.get_all_type_stage = async (data) => {

}

module.exports.get_one_type_stage = async (data) => {

}