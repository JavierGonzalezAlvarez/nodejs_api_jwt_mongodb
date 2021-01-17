//secret key (token)
const config = require('./auth.config');

const User = require('./model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.newuser = (req, res) => {

  const user = new User({
    user: req.body.user,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),    
  });  
  
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }    

    if (req.body.user) {      
      res.send({ message: "User was registered successfully!" });          
    } 
    
  });    
};

exports.getin = (req, res) => {
  User.findOne({
    user: req.body.user
  })
    //.populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "sorry, password is wrong!"
        });
      }

      //get the token for next request
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 172800 // 48 hours
      });
      
      //results
      res.status(200).send({
        id: user._id,
        user: user.user,
        email: user.email,
        isActive: user.isActive,
        isDeleted: user.isDeleted,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,      
        accessToken: token
      });
    });
};
