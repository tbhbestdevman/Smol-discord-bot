const mongoose = require('mongoose');

const Model4Schema = new mongoose.Schema({
  // Define your schema here, for example:
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

module.exports = mongoose.model('Model4', Model4Schema);