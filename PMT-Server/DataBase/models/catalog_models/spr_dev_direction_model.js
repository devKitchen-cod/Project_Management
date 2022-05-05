// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db");
// const Profile_Devs = require("./profile_dev_model");


// const Spr_Dev_Directions = sequelize.define('Spr_Dev_Directions', {
//   ID_Dev_Direction: {
//     type: DataTypes.INTEGER, 
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   },
//   Dev_Name_Direction: {
//     type: DataTypes.STRING, 
//     allowNull: true
//   }
// },
// {
//   timestamps: false
// })

// Spr_Dev_Directions.hasMany(Profile_Devs)
// Profile_Devs.belongsTo(Spr_Dev_Directions);


// module.exports = Spr_Dev_Directions