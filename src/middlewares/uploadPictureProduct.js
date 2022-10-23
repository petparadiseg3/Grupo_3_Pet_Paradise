const path = require("path");
const multer = require("multer");

var storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../../public/images-back/productos"));
  },
  filename: function (req, file, cb) {
    cb(null, "product-" + Date.now() + path.extname(file.originalname));
  },
});
const uploadProductPicture = multer({ storage: storageProduct });

module.exports = uploadProductPicture;
