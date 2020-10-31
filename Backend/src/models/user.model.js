const uuid= require('uuidv4');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      id: {
        primaryKey:true,
        type: Sequelize.UUID,
        defaultValue:Sequelize.literal('uuid_generate_v4()')
      },
      username: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
      },
  
      password: {
        type: Sequelize.STRING,
        require: true,
        allowNull: false,
      },
      codeforverify: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      idverify: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      role:{
        type: Sequelize.STRING,
        defaultValue: "USER"
      }
    });
    return User;
  };
  