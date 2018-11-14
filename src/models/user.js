// Imported modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema
const userSchema = new Schema({
    userName: String,
    userEmail: String,
    userAge: Number,
    userSex: String,
    userStatus: String,
    userCountry: String,
    userCity: String,
    userLikes: Array,
    userDislikes: Array,
    userSexInterest: Array
})


// Exported modules
module.exports = mongoose.model('user', userSchema)