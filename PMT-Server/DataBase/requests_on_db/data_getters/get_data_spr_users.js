const { Spr_Users } = require("../../connecting_db")



module.exports.getDataUser = async (data) => {
  console.log('456456456',data)
  try {
    let result = await Spr_Users.findAll({
      attributes: ['name_user','email_user', 'password_user', ],
      where: {
        'email_user': data
      }
    })
    console.log('result == ', result.rows)
    return result.rows
  } catch (error) {
    console.log(error)
    return error
  }
}

// let result = await Spr_Users.findAll({
      
//   where: {
//     'email_user': data
//   }
// })