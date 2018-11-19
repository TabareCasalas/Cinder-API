// Imported modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema
const userSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userAge: {
        type: Number,
        required: true,
        min: 18
    },
    userSex: {
        type: String,
        required: true
    },
    userStatus: String,
    userCountry: {
        type: String,
        required: true
    },
    userCity: {
        type: String,
        required: true
    },
    userLikes: Array,
    userDislikes: Array,
    userSexInterest: Array
})


// Exported modules
module.exports = mongoose.model('user', userSchema)