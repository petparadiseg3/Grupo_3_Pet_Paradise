module.exports = (sequelize, dataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING,
      },
      descriptions: {
        type: dataTypes.TEXT,
      },
      image: {
        type: dataTypes.STRING,
      },
    },
    {
      tableName: "product",
      timestamps: false,
    }
  ); //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

  /* Product.associate = function (models) {
    Product.hasMany(models.OrderDetail, {
      as: "producto",
      foreignKey: "product_id",
    });

    Product.belongsToMany(models.Weight, {
      as: "pesos",
      throw: "product_weight",
      foreignKey: "product_id",
      otherKey: "weight_id",
      timestamps: false,
    });

    Product.belongsToMany(models.Category, {
      as: "categorias",
      throw: "product_categories",
      foreignKey: "product_id",
      otherKey: "category_id",
      timestamps: false,
    });
  };
 */
  return Product;
};
