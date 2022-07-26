const path = require('path');
const fs = require('fs');

let alimentos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..', 'database','productos.json')))


 productos = {
    alimentos: function(req,res){
        //res.sendFile(path.resolve(__dirname, '..', 'views', 'productos', 'productos.html'));
        res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'),{productos});
    }
}

module.exports= productos;

