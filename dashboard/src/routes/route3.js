const express = require('express');
const router = express.Router();
const Model3 = require('../database/models/model3.js');

router.get('/route3', async (req, res) => {
    try {
        const data = await Model3.find();
        res.render('view3', { data: data });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

router.post('/route3', async (req, res) => {
    const newEntry = new Model3({
        // Assuming Model3 has a field 'name'
        name: req.body.name
    });

    try {
        const savedEntry = await newEntry.save();
        res.redirect('/route3');
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router;