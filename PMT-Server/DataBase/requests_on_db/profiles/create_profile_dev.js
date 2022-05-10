const { Profile_Devs } = require("../../connecting_db")


//getters for developer profile



//CRUD for developer profile
module.exports.create_profile_dev_req = async (data) => {
  try {
    //insert into Profile_Devs
    await Profile_Devs.create({
      Dev_Work_Years: data.workexp,
      Dev_Description: data.description,
      Dev_Technology_Stack: data.techs,
      SprDevLevelIDDevLevel: data.direction,
      SprDevLevelIDDevLevel: data.level,
      SprUserIDUser: data.id
    })

    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.update_profile_dev_req = async (data) => {
  try {
    await Profile_Devs.update({      
      Dev_Work_Years: data.new_workexp,
      Dev_Description: data.new_description,
      Dev_Technology_Stack: new_data.techs,
      SprDevLevelIDDevLevel: new_data.direction,
      SprDevLevelIDDevLevel: new_data.level,
    }, {
      where: {
        ID_Dev_Profile: data.id_profile
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.delete_profile_dev_req = async (data) => {
  try {
    await Profile_Devs.destroy({
      where: {
        ID_Dev_Profile: data.id_profile
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

