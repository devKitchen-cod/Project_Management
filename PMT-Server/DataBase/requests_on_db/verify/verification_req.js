const { Spr_Users } = require("../../connecting_db")

module.exports.isVerification = async (data) => {
  try {
    let result = Spr_Users.findAll({
      attributes: is_verify,
      where: {
        ID_User: data.id
      }
    })
    if(result === true){
      return true
    }
    else{
      return false
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports.verify_account = async (data) => {  
  try {
    await Spr_Users.update({
      is_verify: true      
    }, {
      where: {
        ID_User: data
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}