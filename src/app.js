const express = require("express");
const app = express();

const path = require("path");

const routerIndex = require("./routes/index");

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "../public")));

/* app.use(express.static("public")); */

app.use(routerIndex);

app.listen(3000, () => {
  console.log("Servidor escuchando en puerto 3000");
});

/* app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/cart", (req, res) => {
  res.sendFile(__dirname + "/views/cart.html");
}); */
