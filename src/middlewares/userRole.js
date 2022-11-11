const db = require("../database/models");
const sequelize = db.sequelize;
const session = require("express-session")
const User = db.User;

let userRole = async (req, res, next) => {
    res.locals.isAdmin = false;

    // try {

    //     let emailInCookie = req.cookies.userEmail;
    //     /* let userToLogin = await User.findOne({
    //         where: {
    //             email: emailInCookie,
    //         },
    //     }); */
    //     console.log(emailInCookie);
    // } catch (error) {
    //     res.render("../views/web/error404.ejs");
    // }

    next();
}
module.exports = userRole;