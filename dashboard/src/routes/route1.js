const express = require('express');
const router = express.Router();
const Model1 = require('../database/models/model1');

router.get('/', async (req, res) => {
    try {
        const data = await Model1.find();
        res.render('view1', { data: data });
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/', async (req, res) => {
    const model1 = new Model1({
        // Assuming Model1 has a field 'name'
        name: req.body.name
    });

    try {
        const savedModel1 = await model1.save();
        res.redirect('/');
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;