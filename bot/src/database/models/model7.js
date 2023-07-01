const mongoose = require('mongoose');

const Model7Schema = new mongoose.Schema({
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

module.exports = mongoose.model('Model7', Model7Schema);