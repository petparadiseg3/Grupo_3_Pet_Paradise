module.exports = (sequelize, dataTypes) => {
  const Weight = sequelize.define(
    "Weight",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      stock: {
        type: dataTypes.INTEGER,
      },
      size: {
        type: dataTypes.STRING,
      },
      price: {
        type: dataTypes.DECIMAL,
      },
    },
    {
      tableName: "weight",
      timestamps: false,
    }
  ); //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

  Weight.associate = function (models) {
    Weight.belongsToMany(models.Product, {
      as: "pesosPorProducto",
      throw: "product_weight",
      foreignKey: "weight_id",
      otherKey: "product_id",
      timestamps: false,
    });
  };

  return Weight;
};
