const path = require("path");
const multer = require("multer");

//Como podemos indicar para subir el archivo nombre y donde guardarlo
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images-back/usuarios"));
  },
  filename: function (req, file, cb) {
    cb(null, "user-" + Date.now() + path.extname(file.originalname));
  },
});

const uploadProfileFile = multer({ storage });
module.exports = uploadProfileFile;
