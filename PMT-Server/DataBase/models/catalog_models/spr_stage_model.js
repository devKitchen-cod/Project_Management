// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")
// const Spr_Tasks = require("./spr_task_model")



// const Spr_Stages = sequelize.define('Spr_Stages', {
//   ID_Stage: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   }, 

//   Name_Stage: {
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


// Spr_Stages.hasMany(Spr_Tasks)
// Spr_Tasks.belongsTo(Spr_Stages)




// module.exports = Spr_Stages