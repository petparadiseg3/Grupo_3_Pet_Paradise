//Falta el FK de customer_id.. Eso lo hago con relaciones
module.exports = (sequelize, dataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: dataTypes.INTEGER,
      },
      total: {
        type: dataTypes.DECIMAL,
      },
    },
    {
      tableName: "orders",
      timestamps: true,
    }
  ); //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

  Order.associate = function (models) {
    Order.belongsTo(models.User, {
      as: "usuario",
      foreignKey: "user_id",
    });

    Order.hasMany(models.OrderDetail, {
      as: "detalle",
      foreignKey: "order_id",
    });
  };

  return Order;
};
