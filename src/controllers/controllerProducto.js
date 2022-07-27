const path = require('path');
const fs = require('fs');

/* let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'database', 'productos.json')))

 */
productos = {
    allProductos: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'database', 'products.json')));
        res.render(path.resolve(__dirname, "../views/productos.ejs"), { productos });
    },

    create: (req, res) => {

        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'database', 'products.json')));
        res.render(path.resolve(__dirname, '../views/addProduct.ejs'))

    },
    administrador: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'database', 'products.json')));
        res.render(path.resolve(__dirname, "../views/admin/administrarcopy.ejs"), { productos });
    },
    getProductId: (req, res) => {
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname, '..', 'database', 'products.json')));

       let prodId;
       productos.forEach((e) => {
        if(e.id == req.params.id){
            prodId=e;
        }
    });
        if (!prodId) {
            res.sendStatus(404);
            //res.send("No esta che")
        } else {
            res.render(path.resolve(__dirname, "../views/productoID.ejs"), { prodId });
        }
    },
}

module.exports = productos;