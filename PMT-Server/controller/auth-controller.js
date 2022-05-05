
const jwt = require('jsonwebtoken')
const keys = require('../keys/key')

const { createAccount, checkEmail, checkUser } = require('../DataBase/requests_on_db/auth/auth_req')
const { getDataUser } = require('../DataBase/requests_on_db/data_getters/get_data_spr_users')


module.exports.createUser = async function(req, res){

    let newPerson = {name:req.body.name, email: req.body.email, password: req.body.password, role_user: 1}//, proffetion: req.body.proffetion   
    try {
      const check_email = await checkEmail(newPerson.email)    
      if(newPerson.email==='admin@gmail.com'){ newPerson = {name:req.body.name, email: req.body.email, password: req.body.password, role_user: 2}}//, proffetion: req.body.proffetion
      
      if(check_email === false){ 
        console.log('Console')       
        let success_creating = await createAccount(newPerson) // ----req

        let data_user = await getDataUser(newPerson.email) 
          console.log('789789',data_user)
        let token = null 
        success_creating? (token = jwt.sign({email: newPerson.email, name:newPerson.name, password: newPerson.password}, keys.jwt, {expiresIn: 60 * 60 }))//, proffetion: newPerson.proffetion
                :
                (token = null)
        if(token === null){
          res.status(500).json({message: "Server Error"}) //error of connection server
        }else{
          res.status(200).json({token: token, data_user}) 
        }          
      }
      else{ res.status(404).json({ message: "User with this email is already exist" })}      
    } catch (err) {
      console.log(err);
    }
  }

  module.exports.VerifyToken = async (req, res) =>{
    try{
      const result = await req.headers['authorization']      
      const decoded_Token = await decodeToken(result,res)
      const user ={email:decoded_Token.email, name: decoded_Token.name, password:decoded_Token.password}//, proffetion:decoded_Token.proffetion      
      const email = user.email
      const name = user.name
      const password = user.password
      // const proffetion = user.proffetion
      const flag = await CheckUser(user)      
      flag? 
      (res.status(200).json({ token: header1, email: email, name: name, password: password}))//, proffetion: proffetion
      :
      (res.status(404).json({ message: 'User is not found' }))
    }catch(err){console.log(err), res.status(404).json({ message: 'This user does not exist'})} //,  
  }



 const decodeToken = async function(req,res){
    const result = await req
    try{
      const decodeToken = jwt.decode(result)
      const result_of_decode ={email:decodeToken.email, name:decodeToken.name, password:decodeToken.password}//, proffetion: decodeToken.proffetion
      return result_of_decode
    }catch(err){
      console.log('Error '+err)
    }
  }
