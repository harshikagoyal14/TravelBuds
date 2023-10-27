const { application } = require("express");
const User = require('../Models/UserModel');

const signup = (req, res) => {
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !password || !mobile) {
    res.status(400);
    throw new Error("Please Enter required fields");
  }

  User.findOne({ email: email })
    .then(user => {
      if (user) {
        return res.json("Already have an account");
      } else {
        User.create({
          name,
          email,
          mobile,
          password,
        })
          .then(result => {
            return res.json("Account created");
          })
          .catch(err => {
            return res.json(err);
          });
      }
    });
}

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Please Enter required fields");
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(401).json("User not found");
      }

      // Assuming you're storing hashed passwords in the database
      // You need to implement password validation here, like using bcrypt to compare passwords
      // Here's a simple example, but it's recommended to use a secure password hashing library.
      if (user.password !== password) {
        return res.status(401).json("Invalid password");
      }

      // If the email and password match, you can consider the user as logged in
      return res.json("Login successful");
    })
    .catch(err => {
      return res.json(err);
    });
}

module.exports = {
  signup,
  login, // Add the login function to the exports
};
