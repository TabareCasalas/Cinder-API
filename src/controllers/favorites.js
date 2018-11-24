// Imported modules
const User = require('../models/user');
const Preferences = require('../models/preferences');

// Exported modules
module.exports = {
    userFavorites: async (req, res, next) => {
        const userId = req.params.userId;
        allPreferences = await Preferences.findById(userId).then(
            res.status(200).json(allPreferences.userFavorites));
    },

    newFavorite: async (req, res, next) => {
        const userId = req.params.userId;
        const userFaved = req.body.favoriteId;

        await Preferences.findById(userId).then((user) => {
            if (user == null && User.findById(userFaved) != null) {
                const newFavorite = new Preferences({ _id: userId, userFavorites: [userFaved] });
                newFavorite.save()
                res.status(200).json(userFaved)
            }
            if (user != null && User.findById(userFaved) != null) {
                newPreferences.userFavorites.push(userFaved)
            }
            if (User.findById(userFaved) == null) {
                res.status(400).send("The favorite could not be added")
            }

        }).catch(() => {
            res.status(400).send("The favorite could not be added");
        })
    }
}