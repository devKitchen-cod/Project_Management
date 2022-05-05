
//Developer
module.exports.createDevProfile = async function(req, res) {
  let data = {fname: req.body.fname, lname: req.body.lname, country: req.body.country, workexp: req.body.workexp, proff: req.body.proff, stack: req.body.stack}
  try {
    // const verify = await isVerification()
    

  } catch (error) {
    console.log(error)
  }
}
module.exports.editDevprofile = async function(req, res) {

}
module.exports.deleteDevProfile = async function(req, res) {

}

//Project manager
module.exports.createPMprofile = async function(req, res){

}
module.exports.editPMprofile = async function(req, res){

}
module.exports.deletePMprofile = async function(req, res){

}

