const { application } = require("express");
const User = require('../Models/UserModel');

const signup = (req, res) => {

  const { name, email, mobile, password } = req.body;

  if (!name || !email || !password || !mobile) {
    res.status(400);
    throw new Error("Please Enter required fields")
  }

  User.findOne({ email: email })
    .then(user => {
      if (user) {
       return res.json("Already have an account")
      }
      else {
        User.create({
          name,
          email,
          mobile,
          password,
        })
          .then(result => {return res.json("Acount created")})
          .catch(err => {return res.json(err)})
      }
    })


}

module.exports={
  signup
}


