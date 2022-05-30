const { Task_Implements } = require("../../connecting_db")


module.exports.create_implement_req = async (data) => {
  try {
    let result = await Task_Implements.create({
      Date_Start: data.date_start,
      Date_End: data.date_end,
      SprTaskIDTask: data.id_task,
      SprStatusTaskIDSprStatusTask: data.new_id_status_task,
      ContractIDContract: data.id_contract
    })
    return result
  } catch (error) {
    console.log(error)
    return false

  }
}

module.exports.update_implement_req = async (data) => {
  try {
    let result = await Task_Implements.update({
      Date_Start: data.new_date_start,
      Date_End: data.new_date_end,
      SprTaskIDTask: data.new_id_task,
      SprStatusTaskIDSprStatusTask: data.new_id_status_task,
      ContractIDContract: data.new_id_contract
    })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.delete_implement_req = async (data) => {
  try {
     await Task_Implements.destroy({
       where: {
        ID_Task_Implement: data
       }
     })
     return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.get_one_implement_req = async (data) => {
  try {
    let result = await Task_Implements.findAll({
      where:{
        ID_Task_Implement: data
      }
    })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.get_all_implement_req = async (data) => {
//*
}


