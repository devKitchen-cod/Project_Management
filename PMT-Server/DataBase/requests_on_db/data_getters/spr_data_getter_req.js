const { Spr_Dev_Directions, Spr_Dev_Levels } = require("../../connecting_db")

//=======directions
module.exports.put_dev_directions = async (data) => {
  try {
    await Spr_Dev_Directions.create({
      Dev_Name_Direction: data.name_direction
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.get_dev_directions = async () => {
try {
  let result = await Spr_Dev_Directions.findAll();
  return result
} catch (error) {
  console.log(error)
  return false
}
}
 
module.exports.delete_dev_directions = async (data) => {
  try {
    await Spr_Dev_Directions.destroy({
      where: {
        ID_Dev_Direction: data.id
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.edit_dev_directions = async (data) => {
  try {
    await Spr_Dev_Directions.update({
      Dev_Name_Direction: data.new_name_direction
    },
    {
      where: {
        ID_Dev_Direction: data.id
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

//===========levels
module.exports.put_dev_levels = async (data) => {
  try {
    await Spr_Dev_Levels.create({
      Dev_Name_Levels: data.name_level
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.get_dev_levels = async () => {
  try { 
    let result = await Spr_Dev_Levels.findAll()
    return result
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.delete_dev_levels = async (data) => {
  try {
    await Spr_Dev_Levels.destroy({
      where: {
        ID_Dev_Level: data.id
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.edit_dev_levels = async (data) => {
  try {
    await Spr_Dev_Levels.update({
      Dev_Name_Levels: data.new_name_level
    },
    {
      where: {
        ID_Dev_Level: data.id
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

//Users

