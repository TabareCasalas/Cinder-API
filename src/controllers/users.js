// Imported modules
const User = require('../models/user');

// Exported modules
module.exports = {
    index:  async (req, res, next) => {
      const user = await User.find({});
      res.status(200).json(user);
    },
  
      newUser: async (req, res, next) => {
          const newUser = new User({userName: req.body.userName, userEmail: req.body.userEmail, userAge: req.body.userAge, userSex: req.body.userSex, userStatus: req.body.userStatus, userCountry: req.body.userCountry, userCity: req.body.userCity, userLikes: req.body.userLikes, userDislikes: req.body.userDislikes, userSexInterest: req.body.userSexInterest });
          console.log(req.body);
          const user = await newUser.save();
          res.status(201).json(user);
      },
  
      getUser: async(req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
      },

      getUser: async(req, res, next) => {
        const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
      },
  
      updateUser: async(req, res, next) => {
        const { userId }  =  req.params;
        const newUser = req.body;
        const oldUser = await User.findByIdAndUpdate(userId, newUser);
        res.status(200).json({successs: true});
      },
  
      deleteUser: async(req, res, next) => {
        const { userId } = req.params;
        await User.findOneAndDelete(userId);
        res.status(200).json({success: true});
      }
  
  
  };