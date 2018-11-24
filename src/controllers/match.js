// Imported modules
const User = require('../models/user');
const Preferences = require('../models/preferences');

// Exported modules
module.exports = {
    userMatches: async (req, res, next) => {
        const userId = req.params.userId;
        var currentUser;
        var allMatchesList;
        var excludedList = [];
        var matchesList = [];
        var matchesListOutput = [];

        await [User.findById(userId).then((user) => {
            currentUser = user;
        }).catch(() => {
            res.status(404).send("ERROR 404 The user doesn't exists")
        }),
        await User.find({}).then((list) => {
            allMatchesList = list.filter(eachUser => eachUser.userCountry == currentUser.userCountry)
            allMatchesList = allMatchesList.filter(eachUser => eachUser.userCity == currentUser.userCity)
        }),
        await Preferences.findById(userId).then((userPreferences) => {
            if (userPreferences != null) {
                excludedList = userPreferences.userFavorites.concat(userPreferences.userRejected);
                console.log(excludedList)
                excludedList.forEach(excludedUser => {
                    allMatchesList.forEach((matchUser) => {
                        if (excludedUser == matchUser._id) {
                            allMatchesList.splice(matchUser, 1)

                        }
                    })
                });
            }
            allMatchesList.forEach((match) => {
                matchesList.push([match._id, 0])
                match.userLikes.forEach((matchLikedItem) => {
                    currentUser.userLikes.forEach((userLikedItem) => {
                        if (userLikedItem == matchLikedItem) {
                            matchesList[matchesList.length - 1][1] = matchesList[matchesList.length - 1][1] + 1
                        }
                    })
                    currentUser.userDislikes.forEach((userDislikedItem) => {
                        if (userDislikedItem == matchLikedItem) {
                            matchesList[matchesList.length - 1][1] = matchesList[matchesList.length - 1][1] - 1
                        }
                    })
                })
                match.userDislikes.forEach((matchDislikedItem) => {
                    currentUser.userLikes.forEach((userLikedItem) => {
                        if (userLikedItem == matchDislikedItem) {
                            matchesList[matchesList.length - 1][1] = matchesList[matchesList.length - 1][1] - 1
                        }
                    })
                })
            })
            matchesList.sort((a, b) => a[1] < b[1])
            matchesList.forEach((item) => {
                matchesListOutput.push(item[0])
            })
            res.status(200).json(matchesListOutput)
        })
        ]
    }
}