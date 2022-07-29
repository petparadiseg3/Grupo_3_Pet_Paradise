const path = require("path");
const fs = require("fs");
const {file}=require('../models/user')
const fileProducts = require('../models/user')

let userController={

index: (_req,res)=>{
    let allUsers = fileProducts.readJSON();
    res.render(path.resolve(__dirname,'../views/usuarios/adminUsers.ejs'), {allUsers})
},
create: (_req,res) => {
    res.render(path.resolve(__dirname,"../views/user/create.ejs"))
},



}