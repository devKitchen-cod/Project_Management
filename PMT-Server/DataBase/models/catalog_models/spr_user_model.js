// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")

// const Profile_Creators = require("./profile_creator_model")
// const Profile_Devs = require("./profile_dev_model")

// const Spr_Users = sequelize.define('Spr_Users', {
//   ID_User: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   },
//   name_user: {
//     type: DataTypes.STRING, 
//     allowNull: true
//   },
//   email_user:{
//     type: DataTypes.STRING,
//     allowNull: true,
//   },
//   password_user:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   first_name:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   last_name:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   date_of_birth:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   country:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   profile_dev:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   profile_pm:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   is_verify:{
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   role_user:{
//     type: DataTypes.INTEGER,
//     allowNull: true
//   },
// },
// {
//   timestamps: false
// })

// // Profile_Dev.belongsTo(Spr_User);
// // Profile_Creator.belongsTo(Spr_User);
// // Spr_User.sync({
// //   alter: true
// // });
// // Spr_User.sync()

// Spr_Users.hasMany(Profile_Creators);
// Profile_Creators.belongsTo(Spr_Users);

// Spr_Users.hasMany(Profile_Devs)
// Profile_Devs.belongsTo(Spr_Users)



// module.exports = Spr_Users