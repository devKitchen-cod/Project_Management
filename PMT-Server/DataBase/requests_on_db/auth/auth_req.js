const { Spr_Users } = require('../../connecting_db')

module.exports.createAccount = async (data) => {
  try {
     await Spr_Users.create({
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

module.exports.deleteAccount = async (data) => {
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

module.exports.updateAccount = async (data) => {
  try {
     await Spr_Users.update({
      name_user: data.name,
      email_user: data.email,
      password_user: data.password,
              
    }, {
      where:{
        ID_User: data.id
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports.getDataAccount = async (data) => {
  try {
    let result = await Spr_Users.findAll({
      attributes: ['ID_User','name_user','email_user', 'password_user' ],
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

module.exports.adding_extra_data = async (data) => {
  try {
    await Spr_Users.update({
      first_name: data.fname,
      last_name: data.lname,
      date_of_birth: data.date_of_birth,
      country: data.country 
    }, {
      where:{
        ID_User: data.id
      }
    })
    return true
  } catch (error) {
    console.log(error)
    return false
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