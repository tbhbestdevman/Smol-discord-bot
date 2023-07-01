const mongoose = require('mongoose');

const Model5Schema = new mongoose.Schema({
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

module.exports = mongoose.model('Model5', Model5Schema);