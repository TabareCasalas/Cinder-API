// Imported modules
const User = require('../models/user');
const Preferences = require('../models/preferences');

// Exported modules
module.exports = {
    userRejected: async (req, res, next) => {
        const userId = req.params.userId;
        allPreferences = await Preferences.findById(userId).then(
            res.status(200).json(allPreferences.userRejected));
    },
    
    newRejected: async (req, res, next) => {
        const userId = req.params.userId;
        const userRej = req.body.rejectedId;

        await Preferences.findById(userId).then((user) => {
            if (user == null && User.findById(userRej) != null) {
                const newRejected = new Preferences({ _id: userId, userRejected: [userRej] });
                newRejected.save()
                res.status(200).json(userRej)
            }
            if (user != null && User.findById(userRej) != null) {
                newPreferences.userRejected.push(uuserRej)
            }
            if (User.findById(userRej) == null) {
                res.status(400).send("The rejected could not be added")
            }

        }).catch(() => {
            res.status(400).send("The rejected could not be added");
        })
    }
}