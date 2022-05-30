const { Profile_Devs, Spr_Dev_Directions, Spr_Dev_Levels } = require("../../connecting_db")


// //getters for developer profile
// module.exports.get_all_data_dev_profile = async (data) => {
  
//   try {
//     let result = await Profile_Devs.findAll({
//       where: {
//         ID_Dev_Profile: data.id
//       }
//     })

//     return result
    
//   } catch (error) {
//     console.log(error)
//   }
// }


//CRUD for developer profile
module.exports.create_profile_dev_req = async (data) => {
  try {
    //insert into Profile_Devs
   let result = await Profile_Devs.create({
      Dev_Work_Years: data.workexp,
      Dev_Description: data.description,
      Dev_Technology_Stack: data.techs,
      SprDevLevelIDDevLevel: data.direction,
      SprDevLevelIDDevLevel: data.level,
      SprUserIDUser: data.id
    })

    return result 
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.update_profile_dev_req = async (data) => {
  try {
   let result = await Profile_Devs.update({      
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
    return result
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

module.exports.get_directions_dev = async (data) => {
  try {
    let result = await Spr_Dev_Directions.findAll()
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.get_levels_dev = async (data) => {
  try {
    let result = await Spr_Dev_Levels.findAll()
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

