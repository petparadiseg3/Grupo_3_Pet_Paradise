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
      brand_id: {
        type: dataTypes.INTEGER,
        reference: {
          model: "Brand",
          key: "id",
        },
      },
      category_id: {
        type: dataTypes.INTEGER,
        reference: {
          model: "Category",
          key: "id",
        },
      },
    },

    {
      tableName: "product",
      timestamps: false,
    }
  ); //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

  Product.associate = function (models) {
    //     Product.hasMany(models.OrderDetail, {
    //       as: "producto",
    //       foreignKey: "product_id",
    //     });

    Product.hasMany(models.Weight, {
      as: "tamanos",
      foreignKey: "product_id",
    });

    Product.belongsTo(models.Brand, {
      as: "marca",
      foreignKey: "brand_id",
    });

    Product.belongsTo(models.Category, {
      as: "categoria",
      foreignKey: "category_id",
    });

  };

  return Product;
};
