const express = require("express");
const app = express();

const path = require("path");

const routerIndex = require("./routes/index");
const routerProduct = require("./routes/admin")
app.set("view engine", "ejs");


app.use(express.static(path.join(__dirname, "../public")));



app.use(routerIndex);
app.use(routerProduct);

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});

