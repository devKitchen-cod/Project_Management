const otpGenerator = require('otp-generator')
const { SMS_Sender } = require('../DataBase/requests_on_db/verify/sms-sender')
const { verify_account } = require('../DataBase/requests_on_db/verify/verification_req')


module.exports.get_phone = async (res, req) => {
  let phone = {phone_number: req.body.phone_account}
  //adding phone to DB
  return phone
}

module.exports.get_OTP = (res, req) => {
  const otp = otpGenerator.generate(4, {lowerCaseAlphabets: true})  
  //send messege with otp
  return otp
}

module.exports.sendmessegeotp = async (req, res) => {
  let phone = {phone: req.body.phone}
  const otp = otpGenerator.generate(4, {lowerCaseAlphabets: true})  
  let data = {phone, otp}
  try {
    await SMS_Sender(data)
    res.status(200).json({otp: otp})
  } catch (error) {
    console.log(error)
    //res.status(500)
  }
  

}

module.exports.Verification = async (req, res) => {

  const client_data = {real_otp: req.body.real_otp, client_otp: req.body.client_otp, account_id: req.body.id_account}
  
  if(client_data.client_otp === client_data.real_otp){
    try {
       await verify_account(client_data.account_id)

    } catch (error) {
      console.log(error)
      res.status(500).json({messege: 'Error Db'})
    }
    res.status(200).json({messege: 'Successfull verification', verify: true})
  }
  else{
    res.status(404).json({messege: 'Error verification', verify: false})
  }
}

