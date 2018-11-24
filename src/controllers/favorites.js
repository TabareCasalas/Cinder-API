// Imported modules
const User = require('../models/user');
const Preferences = require('../models/preferences');

// Exported modules
module.exports = {
    userFavorites: async (req, res, next) => {
        const userId = req.params.userId;
        allPreferences = await Preferences.findById(userId);
        res.status(200).json(allPreferences.userFavorites); 
      },

    newFavorite: async (req, res, next) => {
        const userId = req.params.userId;
        const userFaved = req.body.favoriteId;
   
        if (Preferences.findById(userId) == null && User.findById(userFaved) != null) {
            const newFavorite = new Preferences({_id: userId, userFavorites: [userFaved]});
            await newFavorite.save().then( () => {
                res.status(200).json(userFaved)
              }).catch( () => {
                res.status(400).send("The favorite could not be added");
              })}
        if (Preferences.findById(userId) != null && User.findById(userFaved) != null) {
            newPreferences = await Preferences.findById(userId)
            
            newPreferences.userFavorites.push(userFaved)
            
            await Preferences.findByIdAndUpdate(userId, newPreferences).then( () => {
                res.status(200).json(ruserFaved)
              }).catch( () => {
                res.status(400).send("The favorite could not be added");
              })}
        if (User.findById(userFaved) == null) {
            res.status(400).send("The favorite could not be added");
        }}
}