//getters for project manager profile 


const { Profile_Creators } = require("../../connecting_db")


//CRUD for project manager profile

module.exports.create_pm_profile = async (data) => {
  try {
   let result = await Profile_Creators.create({
      Creators_Work_Years: data.creator_work_exp,
      Creators_Description: data.description,
      SprUserIDUser: data.id_profile
    })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.update_pm_profile = async (data) => {
  try {
    let result = await Profile_Creators.update({
      Creators_Work_Years: data.creator_work_exp,
      Creators_Description: data.description,            
    }, {
      where: {        
        ID_Creator_Profile: data.id        
      }
    })
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.delete_pm_profile = async (data) => {
  try {
    await Profile_Creators.destroy({
      where: {
        ID_Creator_Profile: data.id_profile
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}