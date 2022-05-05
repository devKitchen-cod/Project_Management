// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")
// const Contracts = require("./contract_model")
// const Spr_Dev_Directions = require("./spr_dev_direction_model")


// const Profile_Devs = sequelize.define('Profile_Devs', {
//   ID_Dev_Profile: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true, 
//     unique: true,    
//     allowNull: false
//   },
 

//   Dev_Work_Years: {
//     type: DataTypes.INTEGER,
//   allowNull: true
//   }, 
//   Dev_Sallary: {
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },
//   Dev_Description: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   Dev_Technology_Stack: {
//     type: DataTypes.STRING,
//     allowNull: true
//   }
// },
// {
//   timestamps: false
// })

// Profile_Devs.hasMany(Contracts)
// Contracts.belongsTo(Profile_Devs)


// module.exports = Profile_Devs
