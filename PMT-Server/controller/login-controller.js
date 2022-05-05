
const jwt = require('jsonwebtoken')
const keys = require('../keys/key')
const db = require('../DataBase/db')
const {getDataUser } = require('../DataBase/requests_on_db/data_getters/get_data_spr_users')
const { checkEmail, checkPassword } = require('../DataBase/requests_on_db/auth/auth_req')



module.exports.loginUser = async function(req, res){
  console.log("login===============")
  let loginPerson = {email: req.body.email, password: req.body.password}

  const verify_email = await checkEmail(loginPerson.email)
  const verify_password = await checkPassword(loginPerson.password)

  let data_user = await getDataUser(loginPerson.email)
  
  try{
    if(verify_email === true && verify_password === true){

    const token = jwt.sign({email: loginPerson.email, password: loginPerson.password}, keys.jwt, {expiresIn: 60 * 60 }) //create token
    res.status(200).json({
      token: token,
      data_user: data_user
     }) 
  }}catch(err){console.log(err);}
}

