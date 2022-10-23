const db = require("../database/models");
const sequelize = db.sequelize;

const User = db.User;

let apiController = {
  allUsers: async function (req, res) {
    try {
      let allUser = await User.findAll();
      let count = await User.count();

      const users = allUser.map((e) => {
        return {
          id: e.id,
          name: e.name,
          email: e.email,
          detail: "/api/users/" + e.id,
        };
      });

      res.status(200).json([{ count }, { users }]);
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Ocurrio un error pidiendo los datos.",
      });

      console.error(error);
    }
  },
  userDetail: async function (req, res) {
    try {
      let user = await User.findByPk(req.params.id);

      const theUser = {
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        country: user.country,
        phone: user.phone,
        date: user.date,
        picture_user: user.picture_user,
      };
      if (user.name) {
        res.status(200).json(theUser);
      }
    } catch (error) {
      res.status(500).send({
        message:
          error.message || "Ocurrio un error pidiendo los datos.",
      });

      console.error(error);
    }
  },
};

module.exports = apiController;
