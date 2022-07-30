const fs = require("fs");
const path = require("path");
const usersFilePath = path.join(__dirname, "../data/users.json");

let fileUser = {
    
  file: "users.json",

  readJSON: function () {
    return JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
  },

  writeJSON: function (users) {
    let usersJson = JSON.stringify(users);
    fs.writeFileSync(usersFilePath, usersJson);
  },

  saveUser: function (user) {
    let users = this.readJSON();
    let lastUser = users.pop();
    user.id = lastUser.id + 1;
    users.push(user);
    this.writeJSON(users);

    return user;
  },

  updateUser: function (user) {
    let users = this.readJSON();
    let newList = users.map(function (item) {
      if (item.id == user.id) {
        user.image = item.image;
        return (item = user);
      } else {
        return item;
      }
    });
    this.writeJSON(newList);
  },

  deleteUser: function (id) {
    let users = this.readJSON();
    users = users.filter(function (item) {
      return item.id != id;
    });
    this.writeJSON(users);
  },

  getUserById: function (id) {
    let users = this.readJSON();
    let user = {};
    users.forEach(function (item) {
      if (item.id == id) {
        user = item;
      }
    });
    return user;
  },

  filterUser(atribute, value) {
    let users = this.readJSON();
    return users.filter(function (item) {
      return item[atribute] == value;
    });
  },
};

module.exports = fileUser;
