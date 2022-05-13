
module.exports.SMS_Sender = async (data) => {
  
  const accountSid = 'AC12f04c6735259f0cfa32726fc706ec46'; 
  const authToken = '770a36fc4c146b64f71a1f35e7196478'; 
  const client = require('twilio')(accountSid, authToken); 
 
  client.messages
        .create({
          body: data.otp,
          messagingServiceSid: 'MG4f9f4301da2c1472955210380e117739', 
          to: data.phone
        })
        .then(message => console.log(message.sid))
        .done();
}