module.exports = (sequelize, dataTypes) => {
  const Brand = sequelize.define(
    "Brand",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: dataTypes.STRING,
      },
      picture_brand: {
        type: dataTypes.STRING,
      },
    },
    {
      tableName: "brand",
      timestamps: false,
    }
  );

  Brand.associate = (models) => {
    Brand.hasMany(models.Product, {
      as: "marcas",
      foreignKey: "brand_id",
    });
  };

  return Brand;
};
