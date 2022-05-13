

module.exports.SMS_Sending = async (req, res) => {
  const accountSid = 'AC12f04c6735259f0cfa32726fc706ec46'; 
  const authToken = '770a36fc4c146b64f71a1f35e7196478'; 
  const client = require('twilio')(accountSid, authToken); 
 
  client.messages
        .create({
          body: '456123',
          messagingServiceSid: 'MG4f9f4301da2c1472955210380e117739', 
          to: '+380684476511'
        })
        .then(message => console.log(message.sid))
        .done();
}