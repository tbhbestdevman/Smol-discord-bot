const mongoose = require('mongoose');

const Model2Schema = new mongoose.Schema({
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

module.exports = mongoose.model('Model2', Model2Schema);