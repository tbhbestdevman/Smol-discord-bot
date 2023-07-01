const mongoose = require('mongoose');

const Model9Schema = new mongoose.Schema({
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

module.exports = mongoose.model('Model9', Model9Schema);