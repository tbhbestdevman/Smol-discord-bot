const mongoose = require('mongoose');

const Model1Schema = new mongoose.Schema({
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

module.exports = mongoose.model('Model1', Model1Schema);