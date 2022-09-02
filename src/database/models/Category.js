module.exports = (sequelize, dataTypes) => {  
    const Category = sequelize.define("Category", {
        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        name:{
            type:dataTypes.STRING,
        },
        description:{
           type: dataTypes.STRING
        },
        image:{
            type: dataTypes.STRING
        }
    },{
        tableName: 'category',
        timestamps: false
    });  //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

    Category.associate = function (models) {
        Category.belongsToMany(models.Product, {
          as: "categoriaPorProducto",
          throw: "product_categories",
          foreignKey: "category_id",
          otherKey: "product_id",
          timestamps: false,
        });
      };


    return Category; 
}