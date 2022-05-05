// const { DataTypes } = require("sequelize")
// const sequelize = require("../../connecting_db")
// const Spr_Stages = require("./spr_stage_model")


// const Spr_Projects = sequelize.define('Spr_Projects', {
//   ID_Project: {
//     type: DataTypes.INTEGER,
//     primaryKey: true,
//     autoIncrement: true,
//     unique: true,    
//     allowNull: false
//   },

//   Name_Project: {
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


// Spr_Projects.hasMany(Spr_Stages)
// Spr_Stages.belongsTo(Spr_Projects)


// module.exports = Spr_Projects