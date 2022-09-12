const path = require("path");
const multer = require("multer");

var storageBrand = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../../public/images-back/marcas"));
    },
    filename: function (req, file, cb) {
      cb(null, "brand-" + Date.now() + path.extname(file.originalname));
    },
  });
  const uploadBrandPicture = multer({ storage: storageBrand });
  module.exports = uploadBrandPicture;
  