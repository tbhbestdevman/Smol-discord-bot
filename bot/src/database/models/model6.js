const mongoose = require('mongoose');

const Model6Schema = new mongoose.Schema({
    key: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Model6', Model6Schema);