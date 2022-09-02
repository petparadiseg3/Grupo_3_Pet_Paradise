module.exports = (sequelize, dataTypes) => {  
    const ProductWeight = sequelize.define("ProductWeight", {
        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true,
        },
        product_id:{
            type:dataTypes.INTEGER,
        },
        weight_id:{
           type: dataTypes.INTEGER
        }
    },{
        tableName: 'product_weight',
        timestamps: false
    });  //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

    return ProductWeight; 
}