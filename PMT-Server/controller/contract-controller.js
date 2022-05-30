const { create_contract_req, delete_contract_req } = require("../DataBase/contract/contract-req")


module.exports.createContract = async (req, res) => {
  let Contract = {
    dev_profile: req.body.dev_profile,
    creator_profile: req.body.creator_profile
  }
  try {
     let result = await create_contract_req(Contract)
     if (result === false) {
      res.status(503).json({messege: 'error'})   
     } else {
      res.status(200).json({messege: 'successful', result: result }) 
     }
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'error'})
  }
}

// module.exports.updateContract = async (req, res) => {
//   let Contract = {
//     dev_profile: req.body.dev_profile,
//     creator_profile: req.body.creator_profile
//   }
//   try {
//      let result = await create_contract_req(Contract)
//      if (result === false) {
//       res.status(503).json({messege: 'error'})   
//      } else {
       
//      }
//   } catch (error) {
//     console.log(error)
//     res.status(503).json({messege: 'error'})
//   }
// }


module.exports.deleteContract = async (req, res) => {
  let id_contract = req.body.id_contract
  try {
    let result = await delete_contract_req(id_contract)
    result ? res.status(200).json({messege: 'successful', result: result }) : res.status(503).json({messege: 'error'})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'error'})
  }
}

// module.exports.createContract = async (req, res) => {
  
// }
