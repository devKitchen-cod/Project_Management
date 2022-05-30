const { create_implement_req, update_implement_req, delete_implement_req, get_one_implement_req } = require("../DataBase/requests_on_db/tasks/task-implement-req")


module.exports.createImplement = async (req, res) => {
  let Implement = {
    date_start: req.body.date_start,
    date_end: req.body.date_end,
    id_task: req.body.id_task,
    id_status_task: req.body.id_status_task,
    id_contract: req.body.id_contract
  }
  try {
    let result = await create_implement_req(Implement)
    res.status(200).json({messege: 'successful', result: result})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.updateImplement = async (req, res) => {
  let newImplement = {
    new_date_start: req.body.date_start,
    new_date_end: req.body.date_end,
    new_id_task: req.body.id_task,
    new_id_status_task: req.body.id_status_task,
    new_id_contract: req.body.id_contract
  }
  try {
    let result = await update_implement_req(newImplement)
    res.status(200).json({messege: 'successful', result: result})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.deleteImplement = async (req, res) => {
  let deletedIplement = req.body.id_implement
  try {
    await delete_implement_req(deletedImplement)
    res.status(200).json({messege: 'Successful'})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}

module.exports.getImplement = async (req, res) => {
  let ID_implement = req.body.id_implement
  try {
    let result = await get_one_implement_req(ID_implement)
    res.status(200).json({messege: 'successful', result: result})
  } catch (error) {
    console.log(error)
    res.status(503).json({messege: 'Error'})
  }
}
