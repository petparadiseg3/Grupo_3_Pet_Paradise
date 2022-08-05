const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

//? Aqui requiero los paquetes para trabajar lo referido a session y cookies
const session = require("express-session");
const cookies = require("cookie-parser");

const userLoggedMiddleware = require("./middlewares/userLoggedMiddleware");

//? Requerir el middleware que controla si el usuario está o no Logueado

app.use(express.static(path.join(__dirname, "../public")));

const routerIndex = require("./routes/index");
const routerProduct = require("./routes/admin");
const routerCart = require("./routes/cart");
const routerUser = require("./routes/userRoutes");

//Debemos indicar cual es el motor de plantillas que estamos usando EJS
app.set("view engine", "ejs");

//? Le indicamos al app, que nos paramos en views para no llamar en cada render al path.resolve o path.join
app.set("views", path.join(__dirname, "./views"));
//URL encode  - Para que nos pueda llegar la información desde el formulario al req.body
app.use(express.urlencoded({ extended: false }));
//Middleware de aplicación el cual se encargue de controlar la posibilidad de usar otros métodos diferentes al GET y al POST, en nuestros formularios
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "Shhh, It's a secret",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(cookies());
app.use(userLoggedMiddleware);

//? Para indicarle express la carpeta donde se encuentran los archivos estáticos

app.use("/", routerIndex);
app.use("/products", routerProduct);
app.use("/cart", routerCart);
app.use("/user", routerUser);

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});
