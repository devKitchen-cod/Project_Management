// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")
// const Profile_Devs = require("./profile_dev_model")

// const Spr_Dev_Levels = sequelize.define('Spr_Dev_Levels', {
//   ID_Dev_Level: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false 
//   },
//   Dev_Name_Level: {
//     type: DataTypes.STRING,
//     allowNull: true
//   }
// },
// {
//   timestamps: false
// })

// Spr_Dev_Levels.hasMany(Profile_Devs)
// Profile_Devs.belongsTo(Spr_Dev_Levels);




// module.exports = Spr_Dev_Levels