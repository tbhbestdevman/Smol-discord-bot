const express = require('express');
const router = express.Router();
const Model8 = require('../database/models/model8.js');

router.get('/route8', async (req, res) => {
    try {
        const data = await Model8.find();
        res.render('view8', { data: data });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.post('/route8', async (req, res) => {
    const model8 = new Model8({
        // Assuming the model has a field 'name'
        name: req.body.name
    });

    try {
        const savedModel8 = await model8.save();
        res.redirect('/route8');
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;