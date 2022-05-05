const {Sequelize} = require('sequelize');
const { DataTypes } = require("sequelize")
const sequelize = new Sequelize('postgres://sergey1:1@postgres:5432/pmt-db')


const Spr_Stages = sequelize.define('Spr_Stages', {
  ID_Stage: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  }, 

  Name_Stage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Date_Start: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Date_End: {
    type: DataTypes.STRING,
    allowNull: true
  }
  
},
{
  timestamps: false
})

const Spr_Projects = sequelize.define('Spr_Projects', {
  ID_Project: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  },

  Name_Project: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Date_Start: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Date_End: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{
  timestamps: false
})

const Task_Implements = sequelize.define('Task_Implements', {
  ID_Task_Implement: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  },
  Date_Start: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Date_End: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{
  timestamps: false
})

const Contracts = sequelize.define('Contracts', {
  ID_Contract: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  }
})

const Profile_Creators = sequelize.define('Profile_Creators', {
  ID_Creator_Profile: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  }, 
 
  Creators_Work_Years: {
    type: DataTypes.INTEGER,
    allowNull: true
  },

  Creators_Description: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{
  timestamps: false
})

const Spr_Users = sequelize.define('Spr_Users', {
  ID_User: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  },
  name_user: {
    type: DataTypes.STRING, 
    allowNull: true
  },
  email_user:{
    type: DataTypes.STRING,
    allowNull: true,
  },  
  password_user:{
    type: DataTypes.STRING,
    allowNull: true
  },
  double_auth_email_user: {
    type: DataTypes.STRING,
    allowNull: true 
  },
  phone_number_user: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  first_name:{
    type: DataTypes.STRING,
    allowNull: true
  },
  last_name:{
    type: DataTypes.STRING,
    allowNull: true
  },
  date_of_birth:{
    type: DataTypes.STRING,
    allowNull: true
  }, 
  country:{
    type: DataTypes.STRING,
    allowNull: true
  },
  profile_dev:{
    type: DataTypes.STRING,
    allowNull: true
  },
  profile_pm:{
    type: DataTypes.STRING,
    allowNull: true
  },
  is_verify:{
    type: DataTypes.STRING,
    allowNull: true
  },
  role_user:{
    type: DataTypes.INTEGER,
    allowNull: true
  },
},
{
  timestamps: false
})

const Profile_Devs = sequelize.define('Profile_Devs', {
  ID_Dev_Profile: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, 
    unique: true,    
    allowNull: false
  },
 

  Dev_Work_Years: {
    type: DataTypes.INTEGER,
  allowNull: true
  }, 
  Dev_Sallary: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Dev_Description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Dev_Technology_Stack: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{
  timestamps: false
})

const Spr_Dev_Directions = sequelize.define('Spr_Dev_Directions', {
  ID_Dev_Direction: {
    type: DataTypes.INTEGER, 
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  },
  Dev_Name_Direction: {
    type: DataTypes.STRING, 
    allowNull: true
  }
},
{
  timestamps: false
})

const Spr_Dev_Levels = sequelize.define('Spr_Dev_Levels', {
  ID_Dev_Level: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false 
  },
  Dev_Name_Level: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
{
  timestamps: false
})

const Spr_Status_Tasks = sequelize.define('Spr_Status_Tasks', {
  ID_Spr_Status_Task: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true,
    unique: true,    
    allowNull: false
  },

  Name_Status: {
    type: DataTypes.STRING,
    allowNull: true
  }

},
{
  timestamps: false
})

const Spr_Tasks = sequelize.define("Spr_Tasks", {
  ID_Task: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  },
  Name_Task: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Date_Start: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Date_End: { 
    type: DataTypes.STRING,
    allowNull: true
  }
},
{
  timestamps: false
})

const Type_Stages = sequelize.define('Type_Stages', {
  ID_Type_Stage: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,    
    allowNull: false
  },
  Name_Type: {
    type: DataTypes.STRING,
    allowNull: true
  }  
},
{
  timestamps: false
})




Type_Stages.hasMany(Spr_Stages)
Spr_Stages.belongsTo(Type_Stages)

Spr_Tasks.hasMany(Task_Implements)
Task_Implements.belongsTo(Spr_Tasks)


Spr_Status_Tasks.hasMany(Spr_Tasks)
Spr_Tasks.belongsTo(Spr_Status_Tasks)
Spr_Status_Tasks.hasMany(Task_Implements)
Task_Implements.belongsTo(Spr_Status_Tasks)


Spr_Dev_Levels.hasMany(Profile_Devs)
Profile_Devs.belongsTo(Spr_Dev_Levels);

Spr_Dev_Directions.hasMany(Profile_Devs)
Profile_Devs.belongsTo(Spr_Dev_Directions);

Profile_Devs.hasMany(Contracts)
Contracts.belongsTo(Profile_Devs)


Spr_Users.hasMany(Profile_Creators);
Profile_Creators.belongsTo(Spr_Users);
Spr_Users.hasMany(Profile_Devs)
Profile_Devs.belongsTo(Spr_Users)


Profile_Creators.hasMany(Contracts) //--Contract
Contracts.belongsTo(Profile_Creators)
Profile_Creators.hasMany(Spr_Projects)
Spr_Projects.belongsTo(Profile_Creators)


Contracts.hasMany(Task_Implements)
Task_Implements.belongsTo(Contracts)

Spr_Projects.hasMany(Spr_Stages)
Spr_Stages.belongsTo(Spr_Projects)

Spr_Stages.hasMany(Spr_Tasks)
Spr_Tasks.belongsTo(Spr_Stages)


module.exports = {
  Spr_Users: Spr_Users,
  Profile_Devs: Profile_Devs,
  Contracts: Contracts,
  Profile_Creators: Profile_Creators,
  Spr_Dev_Directions: Spr_Dev_Directions,
  Spr_Dev_Levels: Spr_Dev_Levels,
  Spr_Stages: Spr_Stages,
  Spr_Status_Tasks: Spr_Status_Tasks,
  Type_Stages: Type_Stages,
  Task_Implements: Task_Implements  
}


sequelize.sync({force: true})


