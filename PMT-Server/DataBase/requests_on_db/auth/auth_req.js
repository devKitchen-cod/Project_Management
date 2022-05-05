
const { sequelize, Spr_Dev_Directions, Spr_Users } = require('../../connecting_db')

module.exports.createAccount = async (data) => {
  try {
    let user = await Spr_Users.create(
      {
        name_user: data.name,
        email_user: data.email,
        password_user: data.password,
        role_user: data.role_user
      })
    
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}


module.exports.checkEmail = async (data) => {
  try {  
    let result = await Spr_Users.findAll({
      attributes: ["email_user"],
      where: {
        email_user : data
      }
    })    
    if(result === data){
      return true
    }else{
      return false
    }
  } catch (error) {
    return error
  }   
}

// module.exports.checkUser = async (data) => {
//   try {
//     let result = await Spr_Users.findAll({
//       attributes: ['email_user', 'password_user'],
//       where: {
//         email_user: data.email,
//         password_user: data.password
//       }
//     })
//     return result
//   } catch (error) {
//     console.log(error)
//   }
// }


module.exports.checkPassword = async (data) => {
  try {  
    let result = await Spr_Users.findAll({
      attributes: ["password_user"],
      where: {
        password_user : data
      }
    })    
    if(result === data){
      return true
    }else{
      return false
    }
  } catch (error) {
    return error
  }   
}


module.exports.getDataUser = async (data) => {
  try {
    let result = await Spr_Users.findAll({
      attributes: ['name_user','email_user', 'password_user' ],
      where: {
        email_user: data
      }, 
      raw: true
    })
    console.log('result == ', result)
    return result
  } catch (error) {
    console.log(error)
    return error
  }
}

module.exports.deleteUser = async (data) => {
  try {
    await Spr_Users.destroy({
      where: {
        email_user: data
      }, 
      force: true
    })
    return true
  } catch (error) {    
    console.log(error)
    return false
  }
}

