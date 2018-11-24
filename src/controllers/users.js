// Imported modules
const User = require('../models/user');

// Exported modules
module.exports = {
    userIndex: async (req, res, next) => {
      userList = await User.find({});
      res.status(200).json(userList);
    },
  
    newUser: async (req, res, next) => {
      const newUser = new User({userName: req.body.userName, userEmail: req.body.userEmail, userAge: req.body.userAge, userSex: req.body.userSex, userStatus: req.body.userStatus, userCountry: req.body.userCountry, userCity: req.body.userCity, userLikes: req.body.userLikes, userDislikes: req.body.userDislikes, userSexInterest: req.body.userSexInterest });    
      await newUser.save().then( (user) => {
        res.status(200).json(user)
      }).catch( (err) => {
        res.status(400).send(err);
      })},

    getUser: async(req, res, next) => {
      const userId = req.params;
      user = await User.findById(userId).then( (user) => {
        res.status(200).json(user)
      }).catch( (err) => {
        if (User.findByIdAndUpdate(userId) != true) {
          res.status(400).send("ERROR 404 The user doesn't exists");
      };
      })},

    updateUser: async(req, res, next) => {
      const userId = req.params.userId;
      console.log(req.params.userId)
      const newUser = req.body;
      user = await User.findByIdAndUpdate(userId, newUser).then( (user) => {
        res.status(200).json(user)
      }).catch( (err) => {
        if (err.ok == 0) {
          res.status(400).send("ERROR 400 Something went wrong");
        } 
        if (User.findByIdAndUpdate(userId) != true) {
            res.status(404).send("ERROR 404 The user doesn't exists");
        }  
      })},

    deleteUser: async(req, res, next) => {
      console.log("asd")
      const userId = req.params.userId;
      user = await User.findByIdAndDelete(userId).then( (user) => {
        res.status(200).json(user)
      }).catch( (err) => {
        if (User.findByIdAndUpdate(userId) != true) {
          res.status(404).send("ERROR 404 The user doesn't exists");
      };
      })}
    };