const { Spr_Projects } = require("../../connecting_db")

module.exports.create_project_req = async (data) => {
  try {
   let result = await Spr_Projects.create({
    Name_Project: data.name_project,
    Date_Start: data.date_create,
    Date_End: data.date_end,
    ProfileCreatorIDCreatorProfile: data.id_creator
     
  })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.update_project_req = async (data) => {
  try {
    let result = await Spr_Projects.update({
      Name_Project: data.name_project,
      Date_Create: data.date_create,
      Date_End: data.date_end 
    }, {
      where: {
        ID_Project: data.id_project
      }
    })
    return result 
  } catch (error) {
    console.log(error)
    return result
  }
}

module.exports.delete_project_req = async (data) => {
  try {
    await Spr_Projects.destroy({
      where: {
        ID_Project: data.id_project
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}


module.exports.get_all_projects_req = async (data) => {
  try {
    let result = await Spr_Projects.findAll({
      where: {
        ProfileCreatorIDCreatorProfile: data
      }
    })
    return result
  } catch (error) {
    console.log(error)
    return result
  }
}

module.exports.get_one_project_req = async (data) => {
  try {
    let result = await Spr_Projects.findAll({
      where: {
        ID_Project: data
      }
    })
    return result
  } catch (error) {
    console.log(error)
    return result
  }
}
