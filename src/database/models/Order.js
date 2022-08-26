//Falta el FK de customer_id.. Eso lo hago con relaciones 
module.exports = (sequelize, dataTypes) => {  
    const Order = sequelize.define("Order", {
        id:{
            type: dataTypes.INTEGER, 
            primaryKey: true, 
            autoIncrement: true 
        },
        total:{
            type: dataTypes.DECIMAL,
        },
        order_date:{
           type: dataTypes.DATE
        }
    },{
        tableName: 'orders',
        timestamps: false
    });  //El 1er parametro de define es el nombre de la entidad, el 2do es el objeto de las columnas, el 3er parametro recibe el nombre de la tabla (como sale en la base de dato mysql)y timestamps

    return Order; 
}