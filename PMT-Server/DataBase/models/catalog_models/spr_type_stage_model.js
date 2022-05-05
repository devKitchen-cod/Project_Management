// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")
// const Spr_Stages = require("./spr_stage_model")

// const Type_Stages = sequelize.define('Type_Stages', {
//   ID_Type_Stage: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   },
//   Name_Type: {
//     type: DataTypes.STRING,
//     allowNull: true
//   }
  
// },
// {
//   timestamps: false
// })

// Type_Stages.hasMany(Spr_Stages)
// Spr_Stages.belongsTo(Type_Stages)


// module.exports = Type_Stages