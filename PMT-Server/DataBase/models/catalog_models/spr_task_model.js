// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")

// const Task_Implements = require("./task_implement_model")

// const Spr_Tasks = sequelize.define("Spr_Tasks", {
//   ID_Task: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   },
//   Name_Task: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   Date_Start: {
//     type: DataTypes.STRING,
//     allowNull: true
//   },
//   Date_End: {
//     type: DataTypes.STRING,
//     allowNull: true
//   }
// },
// {
//   timestamps: false
// })

// Spr_Tasks.hasMany(Task_Implements)
// Task_Implements.belongsTo(Spr_Tasks)




// module.exports = Spr_Tasks