

// const Pool = require('pg').Pool

//  const pool = new Pool({
//   host: 'postgres', //postgres
//   port: 5432,
//   user: 'sergey1',
//   password: '1',
//   database: 'pmt-db' 
// })
// module.exports = pool


// const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('postgres', 'sergey1', '1', {
//   host: 'postgres',
//   dialect:  'postgres'
// });
// module.exports = sequelize

// const Pool = require('pg').Pool
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// })

// const sequelize = new Sequelize('postgres://sergey1:1@postgres:5432/pmt-db')

// module.exports = sequelize




// const Pool = require('pg').Pool

//  const pool = new Pool({
//   host: 'postgres', //postgres
//   port: 5432,
//   user: 'sergey1',
//   password: '1',
//   database: 'pmt-db' 
// })
// module.exports = pool




//cosnt db = require('../../db')
// module.exports.createAccountReq = async function(data){
//   console.log("data", data)
//   try {
//     db.query(`INSERT INTO "Spr_User" (name_user, email_user, password_user) values ($1, $2, $3)`, [data.name, data.email, data.password])  
// //, surname_user, date_of_birth, country, email_user, password_user, role_user, stack, sallary
//     return true
//   } catch (error) {


//     return false
//   }
// }

// module.exports.checkEmailReq = async (data) => {
//   try {
//     let res_of_req = await (db.query(`SELECT email_user FROM "Spr_User" WHERE email_user = $1;`, [data]))
//     return res_of_req
//   } catch (error) {
//     console.log("req checkemail",error)
    
//   } 
// }


// module.exports.checkUserReq = async (data) => {
//   try {
//     let res_of_req = await db.query(`SELECT email_user, password_user FROM "Spr_User"  WHERE email_user = $1 AND password_user = $2;`, [data.email, data.password])
//     return res_of_req
//   } catch (error) {
//     console.log(error)
//     return error
//   }
// }

// const VerifyEmail = async (req, res) => {
//   const result = req                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
//   console.log(result)
//   let checked_email =await (db.query(`SELECT email_user FROM "Spr_User" WHERE email_user = $1;`, [result]));
//   if((await checked_email).rowCount === 0) {return false}
//   return true
// }

// const VerifyPassword = async (req, res) => {
//   const result = req 
//   console.log(result)
//   let checked_email =await (db.query(`SELECT password_user FROM "Spr_User" WHERE password_user = $1;`, [result]));
//   if((await checked_email).rowCount === 0) {return false}
//   return true
// }
