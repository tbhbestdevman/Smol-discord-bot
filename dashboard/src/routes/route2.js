const express = require('express');
const router = express.Router();
const Model2 = require('../database/models/model2');

router.get('/route2', async (req, res) => {
    try {
        const data = await Model2.find();
        res.render('view2', { data: data });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/route2', async (req, res) => {
    const model2 = new Model2({
        // Assuming model2 has a field 'name'
        name: req.body.name
    });

    try {
        const savedModel2 = await model2.save();
        res.redirect('/route2');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;