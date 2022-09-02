module.exports = (sequelize, dataTypes) => {  
    const Product = sequelize.define("Product", {
        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        name:{
            type:dataTypes.STRING,
        },
        descriptions:{
           type: dataTypes.TEXT
        },
        image:{
            type: dataTypes.STRING
        }
    },{
        tableName: 'product',
        timestamps: false
    });  //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

    return Product; 
}