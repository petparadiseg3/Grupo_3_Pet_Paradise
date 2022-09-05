const Order = require("./Order");

module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING,
      },
      surname: {
        type: dataTypes.STRING,
      },
      email: {
        type: dataTypes.STRING,
      },
      password: {
        type: dataTypes.STRING,
      },
      address: {
        type: dataTypes.STRING,
      },
      country: {
        type: dataTypes.STRING,
      },
      phone: {
        type: dataTypes.STRING,
      },
      date: {
        type: dataTypes.DATE,
      },
      picture_user:{
        type:dataTypes.STRING
      }
    },
    {
      tableName: "user",
      timestamps: false,
    }
  ); //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

  User.associate = function (models) {
    User.hasMany(models.Order, {
      as: "ordenes",
      foreignKey: "user_id",
    });
  };

  return User;
};

