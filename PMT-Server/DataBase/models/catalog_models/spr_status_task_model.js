// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")
// const Spr_Tasks = require("./spr_task_model")
// const Task_Implements = require("./task_implement_model")

// const Spr_Status_Tasks = sequelize.define('Spr_Status_Tasks', {
//   ID_Spr_Status_Task: {
//     type: DataTypes.INTEGER,
//     primaryKey: true, 
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   },

//   Name_Status: {
//     type: DataTypes.STRING,
//     allowNull: true
//   }

// },
// {
//   timestamps: false
// })

// Spr_Status_Tasks.hasMany(Spr_Tasks)
// Spr_Tasks.belongsTo(Spr_Status_Tasks)

// Spr_Status_Tasks.hasMany(Task_Implements)
// Task_Implements.belongsTo(Spr_Status_Tasks)



// module.exports = Spr_Status_Tasks