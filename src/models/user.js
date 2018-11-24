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
        required: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    userAge: {
        type: Number,
        required: true,
        min: 18
    },
    userSex: {
        type: String,
        required: true,
        enum: ['M', 'F']
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
    userDislikes: Array
})


// Exported modules
module.exports = mongoose.model('user', userSchema)