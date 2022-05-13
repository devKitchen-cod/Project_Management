const jwt = require('jsonwebtoken')
const keys = require('../keys/key')
const { createAccount, checkEmail, getDataAccount, deleteAccount, updateAccount } = require('../DataBase/requests_on_db/auth/auth_req')

module.exports.createUser = async function(req, res){

    let newPerson = {name:req.body.name, email: req.body.email, password: req.body.password, role_user: 1}//, proffetion: req.body.proffetion   
    try {
      const check_email = await checkEmail(newPerson.email)    
      if(newPerson.email==='admin@gmail.com'){ newPerson = {name:req.body.name, email: req.body.email, password: req.body.password, role_user: 2}}//, proffetion: req.body.proffetion
      
      if(check_email === false){ 
        console.log('Console')       
        let success_creating = await createAccount(newPerson) // ----req

        let data_user = await getDataAccount(newPerson.email) 
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

  module.exports.loginUser = async function(req, res){
    console.log("login===============")
    let loginPerson = {email: req.body.email, password: req.body.password}
  
    const verify_email = await checkEmail(loginPerson.email)
    const verify_password = await checkPassword(loginPerson.password)
  
    let data_user = await getDataAccount(loginPerson.email)
    
    try{
      if(verify_email === true && verify_password === true){
  
      const token = jwt.sign({email: loginPerson.email, password: loginPerson.password}, keys.jwt, {expiresIn: 60 * 60 }) //create token
      res.status(200).json({
        token: token,
        data_user: data_user
       }) 
    }}catch(err){console.log(err);}
  }

  module.exports.deleteAccount = async (req, res) => {
    console.log('DELETE === ')
    let deletedAccount = {email: req.body.email, password: req.body.password}
    
    let findUser = await checkEmail(deletedAccount.email)
    if(findUser === true){
       let result = await deleteAccount(deletedUser.email)
       result? res.status(200).json({message: "Success Deleted!"}) : res.status(500).json({message: "Oops, ERROR"})
    }else{
      res.status(404).json({message: 'User not found'})
    }
  }
  module.exports.updateUser = async (req, res) => {
    console.log('UPDATE === ')
    let updatedAccount = {name: req.body.name, email: req.body.email, password: req.body.password, id: req.body.id}
    try {  
      let result =  await updateAccount(updatedAccount)
      result? res.status(200).json({message: 'Success'}):res.status(404).json({message: 'Error'}) 
    } catch (error) {
      
      console.log(error)
      res.status(500).json({message: 'Server Error'})
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
  
