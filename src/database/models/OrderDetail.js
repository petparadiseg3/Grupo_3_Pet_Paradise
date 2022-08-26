//Falta el FK de order_id y product_id.. Eso lo hago con relaciones 
module.exports = (sequelize, dataTypes) => {  
    const OrderDetail = sequelize.define("OrderDetail", {
        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        quantity:{
            type:dataTypes.SMALLINT,
        }
    },{
        tableName: 'order_details',
        timestamps: true
    });  //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

    return OrderDetail; 
}