// Imported modules
const User = require('../models/user');
const Preferences = require('../models/preferences');

// Exported modules
module.exports = {
    userRejected: async (req, res, next) => {
        const userId = req.params.userId;
        allPreferences = await Preferences.findById(userId);
        res.status(200).json(allPreferences.userRejected); 
      },
      
    newRejected: async (req, res, next) => {
        const userId = req.params.userId;
        const userRej = req.body.rejectedId;
   
        if (Preferences.findById(userId) == null && User.findById(userRej) != null) {
            const newRejected = new Preferences({_id: userId, userRejected: [userRej]});
            await newRejected.save().then( () => {
                res.status(200).json(userRej)
              }).catch( () => {
                res.status(400).send("The rejected could not be added");
              })}
        if (Preferences.findById(userId) != null && User.findById(userRej) != null) {
            newPreferences = await Preferences.findById(userId)
            
            newPreferences.userRejected.push(userRej)
            
            await Preferences.findByIdAndUpdate(userId, newPreferences).then( () => {
                res.status(200).json(userRej)
              }).catch( () => {
                res.status(400).send("The rejected could not be added");
              })}
        if (User.findById(userRej) == null) {
            res.status(400).send("The rejected could not be added");
        }}
}