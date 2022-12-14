const { User } = require("../models");

const userData = [
  {
    name: "Khanh",
    email: "khanh@gmail.com",
    password: "pass123",
  },
  {
    name: "Alam",
    email: "alam@gmail.com",
    password: "password12345",
  },
  {
    name: "Brandon",
    email: "brandon@gmail.com",
    password: "password12345",
  },
];
const seedUser = () => User.bulkCreate(userData, {
  // REMINDER: needed this individualHooks to check password with encrypted pass
  individualHooks: true
});

module.exports = seedUser;
