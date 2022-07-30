// 1. Guardaral usuario en la DB
// 2. Buscar al usuario que se quiere loguear por su email
// 3. Buscar a un usuario por su ID
// 4. Editar la información de un usuario
// 5. Eliminar a un usuario de la DB
const fs = require("fs");

const User = {
  filename: "../database/user.json",

  getData: function () {
    return JSON.parse(fs.readFileSync(this.filename, "utf-8"));
  },

  generateId: function () {
    let allUser = this.findAll();
    let lastUser = allUser.pop();
    if(lastUser){
        return lastUser.id + 1;
    }
    return 1;
  },

  findAll: function () {
    return this.getData();
  },
  findByPk: function (id) {
    let allUser = this.findAll();
    let userFound = allUser.find((oneUser) => oneUser.id === id);
    return userFound;
  },
  findByField: function (field, text) {
    let allUser = this.findAll();
    let userFound = allUser.find((oneUser) => oneUser[field] === text);
    return userFound;
  },

  create: function (userData) {
    let allUser = this.findAll();
    allUser.push(userData);
    fs.writeFileSync(this.filename, JSON.stringify(allUser), null, 2);
    return true;
  },
};

console.log(User.generateId());
