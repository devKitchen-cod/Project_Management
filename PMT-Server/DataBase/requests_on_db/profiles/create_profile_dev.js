const db = require('../../db')

module.exports.create_profile_dev_req = async function(data){
  try {
    db.query(`INSERT INTO "Profile_User" `)
  } catch (error) {
    console.log(error)
  }
}