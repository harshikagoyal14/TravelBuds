const User = require('../Models/UserModel');

const signup = (req, res) => {
  console.log(req.body);
  const { name, email, mobile, password } = req.body;

  if (!name || !email || !password || !mobile) {
    res.status(400);
    return res.send("Please Enter required fields");
  }

  User.findOne({ email: email })
    .then(user => {
      if (user) {
        return res.send("Already have an account");
      } else {
        User.create({
          name,
          email,
          mobile,
          password,
        })
          .then(result => {
            return res.send("Account created");
          })
          .catch(err => {
            return res.send(err);
          });
      }
    });
}

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    return res.send("Please Enter required fields");
  }

  User.findOne({ email: email })
    .then(user => {
      if (!user) {
        return res.status(401).send("User not found");
      }

      if (user.password !== password) {
        return res.status(401).send("Invalid password");
      }

      // If the email and password match, you can consider the user as logged in
      return res.send("Login successful");
    })
    .catch(err => {
      return res.send(err);
    });
}

module.exports = {
  signup,
  login, 
};
