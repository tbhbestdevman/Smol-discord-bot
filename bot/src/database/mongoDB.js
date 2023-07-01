const mongoose = require('mongoose');
const config = require('../config.json');

const model1 = require('./models/model1.js');
const model2 = require('./models/model2.js');
const model3 = require('./models/model3.js');
const model4 = require('./models/model4.js');
const model5 = require('./models/model5.js');
const model6 = require('./models/model6.js');
const model7 = require('./models/model7.js');
const model8 = require('./models/model8.js');
const model9 = require('./models/model9.js');
const model10 = require('./models/model10.js');

mongoose.connect(config.mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

module.exports = {
    model1: mongoose.model('Model1', model1),
    model2: mongoose.model('Model2', model2),
    model3: mongoose.model('Model3', model3),
    model4: mongoose.model('Model4', model4),
    model5: mongoose.model('Model5', model5),
    model6: mongoose.model('Model6', model6),
    model7: mongoose.model('Model7', model7),
    model8: mongoose.model('Model8', model8),
    model9: mongoose.model('Model9', model9),
    model10: mongoose.model('Model10', model10)
};