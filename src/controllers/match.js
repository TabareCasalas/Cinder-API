// Imported modules
const User = require('../models/user');
const Preferences = require('../models/preferences');

// Exported modules
module.exports = {
    userMatches: async (req, res, next) => {
        const userId = req.params.userId;
        userList = await User.find({});
        currentUser = await User.findById(userId).then( (user) => {
            matchesList = [];
            If (Preferences.findById(userId).userFavorite.filter())




            res.status(200).json(user)
          }).catch( () => {
            if (User.findByIdAndUpdate(userId) != true) {
                res.status(404).send("ERROR 404 The user doesn't exists");
      }})
    }
}