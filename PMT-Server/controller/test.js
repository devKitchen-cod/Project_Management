

// const Spr_Tasks = require('../DataBase/models/catalog_models/spr_task_model')
// const Spr_User = require('../DataBase/models/catalog_models/spr_user_model')

const Spr_Users = require("../DataBase/connecting_db")
const Profile_Devs = require("../DataBase/connecting_db")
// const Spr_Users = require("../DataBase/models/work_models/all_models")


// const Spr_Users = require("../DataBase/models/work_models/all_models")


module.exports.findUsers = async function(req, res){
  // const users  = await Spr_Users.findAll()
  const user = await Spr_Users.findAll()
  const prof = await Profile_Devs.findAll()
  
  console.log(user)
  res.status(200)
}

module.exports.create_p_test = async (req, res) => {
  
}

