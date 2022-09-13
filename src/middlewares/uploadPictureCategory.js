const path = require("path");
const multer = require("multer");

var storageCategory = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, "../../public/images-back/categorias"));
    },
    filename: function (req, file, cb) {
      cb(null, "category-" + Date.now() + path.extname(file.originalname));
    },
  });
  const uploadCategoryPicture = multer({ storage: storageCategory });
  module.exports = uploadCategoryPicture;
  