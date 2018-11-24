// Imported modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Schema
const preferencesSchema = new Schema({
    userFavorites: Array,
    userRejected: Array
})


// Exported modules
module.exports = mongoose.model('preferences', preferencesSchema)