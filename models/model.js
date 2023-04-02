const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Verse: {
        required: true,
        type: String
    },
    Translation: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Data', dataSchema)