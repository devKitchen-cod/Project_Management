const { Spr_Tasks, Spr_Status_Tasks } = require("../../connecting_db")


module.exports.create_task_req = async (data) => {
  try {
    let result = await Spr_Tasks.create({
      Name_Task: data.name_task,
      Date_Start: data.date_start,
      Date_End: data.date_end.Date_End,
      SprStatusTaskIDSprStatusTask: data.status_task,
      SprStageIDStage: data.id_stage
    })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.update_task_req = async (data) => {
  try {
    let result = await Spr_Tasks.update({
      Name_Task: data.new_name_task,
      Date_Start: data.new_date_start,
      Date_End: data.new_date_end,
      SprStatusTaskIDSprStatusTask: data.new_date_end,
      SprStageIDStage: data.new_id_stage
    })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.delete_task_req = async (data) => {
  try {
    await Spr_Tasks.destroy({
      where: {
        ID_Task: data
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.get_all_task = async (data) => {
  try {
    let result = await Spr_Tasks.findAll({
      where:{
        SprStageIDStage: data
      }
    })
    return result
  } catch (error) {
    console.log(errror)
    return false
  }
}

module.exports.get_one_task = async (data) => {
  try {
    let result = await Spr_Tasks.findAll({
      where: {
        ID_Task: data
      }
    })
    return result
  } catch (error) {
     console.log(error)
     return false
  }
}

module.exports.get_status_task = async (data) => {
  try {
    let result = await Spr_Status_Tasks.findAll()
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}