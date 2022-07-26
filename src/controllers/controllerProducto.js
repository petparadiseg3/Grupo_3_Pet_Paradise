const path = require('path');
const fs = require('fs');

let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..', 'database','productos.json')))


 productos = {
    alimentos: function(req,res){
        
        let alimentos=
        res.render(path.resolve(__dirname, '..', 'views', 'productos', 'productos'),{alimentos});

    },
    create:(req,res)=>{
    
        let productos = JSON.parse(fs.readFileSync(path.resolve(__dirname,'..', 'database','productos.json')));
        res.render(path.resolve(__dirname, '../views/admin/create'))

    }
}

module.exports= productos;