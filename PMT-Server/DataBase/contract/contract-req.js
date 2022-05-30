const { Contracts } = require("../connecting_db")


module.exports.create_contract_req = async (data) => {
try {
  let result = await Contracts.create({
    ProfileDevIDDevProfile: data.dev_profile,
    ProfileCreatorIDCreatorProfile: data.creator_profile
  })
  return result
} catch (error) {
    console.log(error)
  return false
  }
}

module.exports.update_contract_req = async (data) => {
  
}

module.exports.delete_contract_req = async (data) => {
  
}

// module.exports.create_contract_req = async (data) => {
  
// } 