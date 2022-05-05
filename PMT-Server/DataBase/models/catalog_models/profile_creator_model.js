// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")
// const Contracts = require("./contract_model")
// const Spr_Projects = require("./spr_project_model")


// const Profile_Creators = sequelize.define('Profile_Creators', {
//   ID_Creator_Profile: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   }, 
 
//   Creators_Work_Years: {
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },

//   Creators_Description: {
//     type: DataTypes.STRING,
//     allowNull: true
//   }
// },
// {
//   timestamps: false
// })
// Profile_Creators.hasMany(Contracts) //--Contract
// Contracts.belongsTo(Profile_Creators)

// Profile_Creators.hasMany(Spr_Projects)
// Spr_Projects.belongsTo(Profile_Creators)

// module.exports = Profile_Creators


