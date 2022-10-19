const db = require("../database/models");
const sequelize = db.sequelize;

const User = db.User;

let apiController = {
  allUsers: async function (req, res) {
    try {
      let { count, rows } = await User.findAndCountAll();

      res.status(200).json({ count, rows });
    } catch (error) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });

      console.error(error);
    }
  },
};

module.exports = apiController;
